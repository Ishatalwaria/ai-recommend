import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const HF_API_KEY = process.env.HF_API_KEY;

export async function analyzeBackgroundAndMood(imageBuffer) {
  if (!HF_API_KEY) {
    throw new Error("Missing HF_API_KEY");
  }

  // Validate that we have a buffer
  if (!Buffer.isBuffer(imageBuffer)) {
    throw new Error("Invalid image buffer provided");
  }

  try {
    console.log("🔍 Calling HuggingFace API with image buffer size:", imageBuffer.length);

    // Determine content type based on image buffer (simplified approach)
    // For now, we'll use image/jpeg as default since most images are JPEG
    const contentType = "image/jpeg";

    const response = await fetch(
      "https://api-inference.huggingface.co/models/facebook/detr-resnet-50",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HF_API_KEY}`,
          "Content-Type": contentType,
        },
        body: imageBuffer,
      }
    );

    console.log("🔍 HuggingFace response status:", response.status);

    if (!response.ok) {
      const text = await response.text();
      console.error("❌ HuggingFace API error response:", text);
      throw new Error(`Hugging Face API error: ${response.status} - ${text}`);
    }

    const result = await response.json();
    console.log("🔍 HuggingFace raw result:", result);
    
    // Extract labels from the result
    if (Array.isArray(result)) {
      const labels = result.map(item => item.label).filter(Boolean);
      console.log("🔍 Extracted labels:", labels);
      return labels;
    }
    
    console.log("🔍 No valid labels found, returning empty array");
    return [];
  } catch (error) {
    console.error("❌ HuggingFace service error:", error.message);
    throw error;
  }
}
