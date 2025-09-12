import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import analyzeRouter from "./routes/analyze.js";
import spotifyRoutes from "./routes/spotifyRoutes.js";
import geminiRoutes from "./routes/geminiRoutes.js";
import huggingfaceRoutes from "./routes/huggingfaceRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";


dotenv.config();
const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN  }));
app.use(express.json());

app.use("/analyze-photo", analyzeRouter);
app.use("/api/spotify", spotifyRoutes);
app.use("/api/gemini", geminiRoutes);
app.use("/api/huggingface", huggingfaceRoutes);

// Global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
