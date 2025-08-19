import express from "express";
import { generateCaptionsAndBios } from "../services/gemini.js";

const router = express.Router();

/**
 * POST /api/gemini/analyze
 * Body: { base64: string, mime: string, tags?: string[], moods?: string[] }
 */
router.post("/analyze", async (req, res) => {
  try {
    const { base64, mime } = req.body;

    if (!base64 || !mime) {
      return res.status(400).json({ error: "base64 image and mime type required" });
    }

    const result = await generateCaptionsAndBios({ base64, mime });

    res.json(result);
  } catch (err) {
    console.error("❌ Gemini route error:", err.message);
    res.status(500).json({ error: "Failed to generate captions/bios" });
  }
});

export default router;
