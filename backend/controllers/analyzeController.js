import { analyzeBackgroundAndMood } from "../services/huggingface.js";
import { generateCaptionsAndBios } from "../services/gemini.js";
import { searchTracks } from "../services/spotify.js";
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
      // Fallback captions and bios based on moods
      captions = generateFallbackCaptions(moods, tags);
      bios = generateFallbackBios(moods, tags);
    }

    // Step 4: Get songs from Spotify API based on moods
    let songs = [];
    try {
      // Convert moods to Spotify-compatible genres
      const seedGenres = pickSeedGenres(moods);
      console.log("🎵 Converting moods to Spotify genres:", moods, "→", seedGenres);
      const query = seedGenres.join(" ");
      // Get recommendations from Spotify API
      songs = await searchTracks(query);
      console.log("✅ Spotify songs:", songs?.length);
    } catch (err) {
      console.error("❌ Spotify API error:", err.message);
      songs = [];
    }

    return res.json({ tags, moods, captions, bios, songs });
  } catch (err) {
    console.error("❌ Unexpected controller error:", err);
    next(err);
  }
};

// Fallback functions for when Gemini fails
function generateFallbackCaptions(moods, tags) {
  const moodCaptions = {
    chill: [
      "Living that peaceful life ✨",
      "Good vibes only 🌿",
      "Finding my zen moment 🧘‍♀️",
      "Life is better when you're relaxed 😌",
      "Embracing the calm ✨"
    ],
    party: [
      "Let's celebrate! 🎉",
      "Good times with great people 🥂",
      "Dance like nobody's watching 💃",
      "Party mode activated 🎊",
      "Making memories that last 🎵"
    ],
    acoustic: [
      "Nature's beauty never fails 🌲",
      "Adventure awaits! 🏔️",
      "Exploring the great outdoors 🥾",
      "Mother nature at her finest 🌿",
      "Wild and free 🌄"
    ],
    dance: [
      "Night vibes ✨",
      "City lights and good times 🌃",
      "Living in the moment 🎵",
      "Energy is everything ⚡",
      "Dance through life 💫"
    ],
    romance: [
      "Love is in the air 💕",
      "Every moment with you is magic ✨",
      "Forever starts now 💑",
      "You make everything beautiful 🌹",
      "Love story in progress 💖"
    ],
    sad: [
      "Finding beauty in the rain 🌧️",
      "Even storms pass eventually ⛈️",
      "Growing through what I'm going through 🌱",
      "Finding strength in vulnerability 💪",
      "Better days ahead ✨"
    ],
    workout: [
      "Getting stronger every day 💪",
      "Sweat is just fat crying 😤",
      "Progress over perfection 🏃‍♀️",
      "Fueling my passion 🔥",
      "Building the best version of me 💯"
    ],
    pop: [
      "Living my best life ✨",
      "Good vibes and great times 🌟",
      "Making every day count 💫",
      "Positive energy only ✨",
      "Life is what happens while you're busy living 🌈"
    ]
  };

  const primaryMood = moods[0] || "pop";
  return moodCaptions[primaryMood] || moodCaptions.pop;
}

function generateFallbackBios(moods, tags) {
  const moodBios = {
    chill: [
      "Living life at my own pace ✨",
      "Finding peace in the little things 🌿",
      "Chasing calm vibes and good energy 😌"
    ],
    party: [
      "Life of the party 🎉",
      "Making every moment count 🥂",
      "Good vibes and great times only 💃"
    ],
    acoustic: [
      "Adventure seeker and nature lover 🏔️",
      "Exploring the world one step at a time 🥾",
      "Wild spirit with a free soul 🌲"
    ],
    dance: [
      "Dancing through life's rhythm 💃",
      "Night owl with city dreams 🌃",
      "Energy enthusiast and vibe creator ⚡"
    ],
    romance: [
      "Hopeless romantic with a heart of gold 💕",
      "Believing in love stories and happy endings 💑",
      "Spreading love and positive vibes ✨"
    ],
    sad: [
      "Finding strength in vulnerability 💪",
      "Growing through what I'm going through 🌱",
      "Embracing all emotions, even the hard ones 💙"
    ],
    workout: [
      "Fitness enthusiast and goal crusher 💪",
      "Building strength inside and out 🏃‍♀️",
      "Progress over perfection, always 🔥"
    ],
    pop: [
      "Living life with passion and purpose ✨",
      "Positive vibes and endless possibilities 🌟",
      "Making every day an adventure 💫"
    ]
  };

  const primaryMood = moods[0] || "pop";
  return moodBios[primaryMood] || moodBios.pop;
}
