// import express from "express";
// import { getRecommendations } from "../services/spotify.js";

// const router = express.Router();

// /**
//  * POST /api/spotify/recommendations
//  * Body: { genres: ["pop", "rock"] } - optional
//  */
// router.post("/recommendations", async (req, res) => {
//   try {
//     const { genres } = req.body; // optional moods/genres from frontend
//     const tracks = await getRecommendations(genres || ["pop"]);

//     res.json({ success: true, tracks });
//   } catch (err) {
//     console.error("Spotify error details:", JSON.stringify(err, null, 2));

//     const msg =
//       err?.body?.error?.message ||
//       err?.body?.error ||
//       err?.message ||
//       "Unknown Spotify error";

//     res.status(500).json({ error: msg });
//   }
// });

// export default router;

import express from "express";
import { searchTracks } from "../services/spotify.js";

const router = express.Router();

router.get("/search", async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) return res.status(400).json({ error: "Query parameter 'q' is required" });

    const tracks = await searchTracks(q);
    res.json(tracks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
