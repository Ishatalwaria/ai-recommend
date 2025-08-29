// // routes/huggingfaceRoutes.js
// import express from "express";
// import multer from "multer";
// import fs from "fs";
// import { analyzeBackgroundAndMood } from "../services/huggingface.js";

// const router = express.Router();

// // Configure Multer to store uploaded files temporarily
// const upload = multer({ dest: "uploads/" });

// /**
//  * POST /api/huggingface/analyze
//  * FormData: { photo: <file> }
//  */
// router.post("/analyze", upload.single("photo"), async (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ error: "No photo uploaded" });
//   }

//   const filePath = req.file.path;

//   try {
//     // Call Hugging Face service
//     const { moods, background } = await analyzeBackgroundAndMood(filePath);

//     res.json({ success: true, moods, background });
//   } catch (err) {
//     console.error("Hugging Face route error:", err.message);
//     res.status(500).json({ success: false, error: err.message });
//   } finally {
//     // Remove temp file after processing
//     fs.unlink(filePath, (err) => {
//       if (err) console.error("Failed to delete temp file:", err);
//     });
//   }
// });

// export default router;
// routes/huggingfaceRoutes.js
import express from "express";
import multer from "multer";
import fs from "fs";
import { analyzeBackgroundAndMood } from "../services/huggingface.js";

const router = express.Router();

// Configure Multer to store uploaded files temporarily
const upload = multer({ dest: "uploads/" });

/**
 * POST /api/huggingface/analyze
 * FormData: { photo: <file> }
 */
router.post("/analyze", upload.single("photo"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No photo uploaded" });
  }

  const filePath = req.file.path;

  try {
    // Read file into Buffer
    const imageBuffer = fs.readFileSync(filePath);

    // Call Hugging Face service
    const {  background, emotionTags,moods } = await analyzeBackgroundAndMood(imageBuffer);

    res.json({ success: true,  background, emotionTags,moods });
  } catch (err) {
    console.error("❌ Hugging Face route error:", err.message);
    res.status(500).json({ success: false, error: err.message });
  } finally {
    // Remove temp file after processing
    fs.unlink(filePath, (err) => {
      if (err) console.error("⚠️ Failed to delete temp file:", err);
    });
  }
});

export default router;
