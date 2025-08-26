import { Router } from "express";
import multer from "multer";
import  {analyzeController}  from '../controllers/analyzeController.js';
import { getRecommendations } from '../services/spotify.js';

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

// Test Spotify endpoint
router.get("/test-spotify", async (req, res) => {
  try {
    const songs = await getRecommendations(["pop"]);
    res.json({
      success: true,
      message: "Spotify API is working!",
      songsCount: songs.length,
      songs: songs.slice(0, 2) // Show first 2 songs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Spotify API test failed",
      error: error.message
    });
  }
});

// Test endpoint with sample data
router.get("/test-data", (req, res) => {
  res.json({
    tags: ["person", "portrait", "smile"],
    moods: ["pop", "happy"],
    captions: [
      "Living my best life ✨",
      "Good vibes and great times 🌟",
      "Making every day count 💫",
      "Positive energy only ✨",
      "Life is what happens while you're busy living 🌈"
    ],
    bios: [
      "Living life with passion and purpose ✨",
      "Positive vibes and endless possibilities 🌟",
      "Making every day an adventure 💫"
    ],
    songs: [
      {
        id: "pop1",
        name: "Blinding Lights",
        artist: "The Weeknd",
        url: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b",
        album: "After Hours",
        image: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36"
      },
      {
        id: "pop2",
        name: "As It Was",
        artist: "Harry Styles",
        url: "https://open.spotify.com/track/4LRPiXqCikLlN15c3yImP7",
        album: "Harry's House",
        image: "https://i.scdn.co/image/ab67616d0000b273b46f74097655d7f353caab14"
      }
    ]
  });
});

// expects multipart/form-data with field name: "photo"
router.post("/", upload.single("photo"), analyzeController);

export default router;