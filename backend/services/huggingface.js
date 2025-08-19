import fetch from "node-fetch";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const HF_API_KEY = process.env.HF_API_KEY;

export async function analyzeBackgroundAndMood(imagePath) {
  if (!HF_API_KEY) throw new Error("Missing HF_API_KEY");

  // Ensure it's a real file path
  if (!fs.existsSync(imagePath)) {
    throw new Error(`File not found at path: ${imagePath}`);
  }

  const imageBuffer = fs.readFileSync(imagePath);

  const response = await fetch(
    "https://api-inference.huggingface.co/models/facebook/detr-resnet-50",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HF_API_KEY}`,
        "Content-Type": "application/octet-stream",
      },
      body: imageBuffer,
    }
  );

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Hugging Face API error: ${text}`);
  }

  return await response.json();
}
