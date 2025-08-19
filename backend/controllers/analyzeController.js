import { analyzeBackgroundAndMood } from "../services/huggingface.js";
import { generateCaptionsAndBios } from "../services/gemini.js";
import { getRecommendations } from "../services/spotify.js";
import { mapTagsToMoods, pickSeedGenres } from "../utils/moodMap.js";

export const analyzeController = async (req, res, next) => {
  try {
    if (!req.file || !req.file.buffer) {
      return res.status(400).json({ error: "No photo uploaded" });
    }

    const mime = req.file.mimetype || "image/jpeg";
    const base64 = req.file.buffer.toString("base64");
    const dataUrl = `data:${mime};base64,${base64}`;

    console.log("📸 Received photo:", { mime, size: req.file.size });

    // Step 1: Hugging Face → detect moods & background
    let tags = [];
    try {
      tags = await analyzeBackgroundAndMood(req.file.buffer);
      console.log("✅ Hugging Face tags:", tags);
    } catch (err) {
      console.error("❌ Hugging Face error:", err.message);
      tags = ["unknown"];
    }

    // Step 2: Map moods
    const moods = mapTagsToMoods(tags);
    console.log("🎶 Moods:", moods);

    // Step 3: Gemini → captions + bios
    let captions = [], bios = [];
    try {
      ({ captions, bios } = await generateCaptionsAndBios({
        base64,
        mime,
        tags,
        moods,
      }));
      console.log("✅ Gemini response:", { captions, bios });
    } catch (err) {
      console.error("❌ Gemini error:", err.message);
      captions = ["Couldn’t generate caption"];
      bios = ["Couldn’t generate bio"];
    }

    // Step 4: Spotify → songs
    let songs = [];
    try {
      const seedGenres = pickSeedGenres(moods);
      songs = await getRecommendations(seedGenres);
      console.log("✅ Spotify songs:", songs?.length);
    } catch (err) {
      console.error("❌ Spotify error:", err.message);
      songs = [];
    }

    return res.json({ tags, moods, captions, bios, songs });
  } catch (err) {
    console.error("❌ Unexpected controller error:", err);
    next(err);
  }
};
