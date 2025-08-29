// import fetch from "node-fetch";
// import dotenv from "dotenv";
// dotenv.config();

// const HF_API_KEY = process.env.HF_API_KEY;

// export async function analyzeBackgroundAndMood(imageBuffer) {
//   if (!HF_API_KEY) {
//     throw new Error("Missing HF_API_KEY");
//   }

//   // Validate that we have a buffer
//   if (!Buffer.isBuffer(imageBuffer)) {
//     throw new Error("Invalid image buffer provided");
//   }

//   try {
//     console.log("🔍 Calling HuggingFace API with image buffer size:", imageBuffer.length);

//     // Determine content type based on image buffer (simplified approach)
//     // For now, we'll use image/jpeg as default since most images are JPEG
//     const contentType = "image/jpeg";

//     const response = await fetch(
//       "https://api-inference.huggingface.co/models/facebook/detr-resnet-50",
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${HF_API_KEY}`,
//           "Content-Type": contentType,
//         },
//         body: imageBuffer,
//       }
//     );

//     console.log("🔍 HuggingFace response status:", response.status);

//     if (!response.ok) {
//       const text = await response.text();
//       console.error("❌ HuggingFace API error response:", text);
//       throw new Error(`Hugging Face API error: ${response.status} - ${text}`);
//     }

//     const result = await response.json();
//     console.log("🔍 HuggingFace raw result:", result);
    
//     // Extract labels from the result
//     if (Array.isArray(result)) {
//       const labels = result.map(item => item.label).filter(Boolean);
//       console.log("🔍 Extracted labels:", labels);
//       return labels;
//     }
    
//     console.log("🔍 No valid labels found, returning empty array");
//     return [];
//   } catch (error) {
//     console.error("❌ HuggingFace service error:", error.message);
//     throw error;
//   }
// }
// services/huggingface.js
// services/huggingface.js
import fetch from "node-fetch";
import dotenv from "dotenv";
import { mapTagsToMoods } from "../utils/moodMap.js";
dotenv.config();

const HF_API_KEY = process.env.HF_API_KEY;

async function query(model, imageBuffer, contentType = "image/jpeg") {
  if (!HF_API_KEY) {
    throw new Error("Missing HF_API_KEY");
  }

  const res = await fetch(
    `https://api-inference.huggingface.co/models/${model}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HF_API_KEY}`,
        "Content-Type": contentType,
      },
      body: imageBuffer,
    }
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Hugging Face API error (${model}): ${res.status} – ${text}`);
  }

  return res.json();
}

export async function analyzeBackgroundAndMood(imageBuffer) {
  if (!Buffer.isBuffer(imageBuffer)) {
    throw new Error("Invalid image buffer provided, expected Buffer.");
  }

  try {
    // 1. Background / Scene classification
    const backgroundResult = await query("microsoft/resnet-50", imageBuffer);
    const backgroundLabels = Array.isArray(backgroundResult)
      ? backgroundResult.slice(0, 5).map((item) => item.label.toLowerCase())
      : [];

    // 2. Facial emotion detection
    const emotionResult = await query(
      "dima806/facial_emotions_image_detection",
      imageBuffer
    );

    let topEmotion = null;
    let emotionLabels = [];

    if (Array.isArray(emotionResult)) {
      const sorted = [...emotionResult].sort((a, b) => b.score - a.score);
      topEmotion = sorted[0]?.label.toLowerCase();
      emotionLabels = sorted.slice(0, 3).map((e) => e.label.toLowerCase());
    }

    // 3. Map combined labels to moods
    const combinedTags = [...backgroundLabels, ...emotionLabels];
    const moods = mapTagsToMoods(combinedTags);

    return {
      background: backgroundLabels, // top scene labels
      emotionTags: emotionLabels,   // raw emotion labels
      moods,                        // broader mapped moods
    };
  } catch (err) {
    console.error("Hugging Face analysis error:", err);
    throw err;
  }
}
