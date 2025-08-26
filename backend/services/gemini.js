import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

/**
 * Generates captions & bios using Gemini 1.5 (multimodal), feeding image + tags/moods.
 * Returns { captions: string[], bios: string[] }
 */
export async function generateCaptionsAndBios({ base64, mime, tags, moods }) {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("Missing GEMINI_API_KEY");
  }

  try {
    // Use the correct model name
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `You are helping to craft social content. Given the image and metadata, return STRICT JSON with two keys: 

{
  "captions": ["short, catchy, modern instagram-style caption", "..."],
  "bios": ["short 1-2 line bio matching the vibe", "..."]
}

Guidelines:
- 5 captions (no hashtags), 5 bios.
- Creative but concise; avoid quotes around emojis.
- Use the image vibe and these tags: ${tags?.join(", ") || "none"}.
- Moods: ${moods?.join(", ") || "none"}.

Return ONLY the JSON object, no additional text.`;

    const parts = [
      {
        inlineData: {
          data: base64,
          mimeType: mime
        }
      },
      {
        text: prompt
      }
    ];

    console.log("🤖 Calling Gemini API with:", { 
      hasImage: !!base64, 
      mime, 
      tags: tags?.length, 
      moods: moods?.length 
    });

    const result = await model.generateContent(parts);
    const response = await result.response;
    const text = response.text();

    console.log("🤖 Gemini raw response:", text.substring(0, 200) + "...");

    // Extract JSON safely (in case model wraps it in text)
    const json = tryParseJsonFromText(text);
    
    console.log("🤖 Parsed JSON:", json);

    return {
      captions: Array.isArray(json?.captions) ? json.captions.slice(0, 5) : [],
      bios: Array.isArray(json?.bios) ? json.bios.slice(0, 5) : [],
    };
  } catch (error) {
    console.error("❌ Gemini API Error:", error.message);
    console.error("❌ Full error:", error);
    throw error;
  }
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
  } catch (parseError) {
    console.error("❌ JSON parsing error:", parseError.message);
    console.error("❌ Text to parse:", str);
    return {};
  }
}
