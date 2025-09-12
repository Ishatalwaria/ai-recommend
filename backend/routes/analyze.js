import { Router } from "express";
import multer from "multer";
import  {analyzeController}  from '../controllers/analyzeController.js';
import { searchTracks } from '../services/spotify.js';

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

// Test endpoint to verify API keys
router.get("/test", (req, res) => {
  const envVars = {
    HF_API_KEY: process.env.HF_API_KEY ? "✅ Set" : "❌ Missing",
    GEMINI_API_KEY: process.env.GEMINI_API_KEY ? "✅ Set" : "❌ Missing",
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID ? "✅ Set" : "❌ Missing",
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET ? "✅ Set" : "❌ Missing",
  };
  
  res.json({
    message: "API Keys Status",
    environment: envVars,
    timestamp: new Date().toISOString()
  });
});


// expects multipart/form-data with field name: "photo"
router.post("/", upload.single("photo"), analyzeController);

export default router;