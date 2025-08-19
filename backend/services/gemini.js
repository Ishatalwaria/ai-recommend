import dotenv from "dotenv";

import { GoogleGenerativeAI } from "@google/generative-ai";
dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

/**
 * Generates captions & bios using Gemini 1.5 (multimodal), feeding image + tags/moods.
 * Returns { captions: string[], bios: string[] }
 */
export async function generateCaptionsAndBios({ base64, mime, tags, moods }) {
  if (!process.env.GEMINI_API_KEY) throw new Error("Missing GEMINI_API_KEY");

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // fast & multimodal

  const prompt = `You are helping to craft social content. Given the image and metadata, return STRICT JSON with two keys: \n\n{
    "captions": ["short, catchy, modern instagram-style caption", "..."],
    "bios": ["short 1-2 line bio matching the vibe", "..."]
}

Guidelines:\n- 5 captions (no hashtags), 5 bios.\n- Creative but concise; avoid quotes around emojis.\n- Use the image vibe and these tags: ${tags?.join(", ") || "none"}.\n- Moods: ${moods?.join(", ") || "none"}.`;

  const parts = [
    { inlineData: { data: base64, mimeType: mime } },
    { text: prompt },
  ];

  const result = await model.generateContent({ contents: [{ role: "user", parts }] });
  const text = result.response.text();

  // Extract JSON safely (in case model wraps it in text)
  const json = tryParseJsonFromText(text);
  return {
    captions: Array.isArray(json?.captions) ? json.captions.slice(0, 5) : [],
    bios: Array.isArray(json?.bios) ? json.bios.slice(0, 5) : [],
  };
}

function tryParseJsonFromText(str) {
  try {
    // if text contains a fenced block ```json ... ```
    const fenceMatch = str.match(/```json[\s\S]*?```/i);
    if (fenceMatch) {
      const inner = fenceMatch[0].replace(/```json|```/gi, "");
      return JSON.parse(inner);
    }
    // extract first {...} block
    const start = str.indexOf("{");
    const end = str.lastIndexOf("}");
    if (start !== -1 && end !== -1) {
      return JSON.parse(str.slice(start, end + 1));
    }
    return JSON.parse(str);
  } catch (_) {
    return {};
  }
}