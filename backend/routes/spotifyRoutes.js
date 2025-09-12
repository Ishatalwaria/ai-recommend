

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
