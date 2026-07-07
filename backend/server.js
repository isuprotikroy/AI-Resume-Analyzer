import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import resumeRoutes from "./routes/resumeRoutes.js";
import analyzeRoutes from "./routes/analyzeRoutes.js";

dotenv.config();

console.log("✅ Gemini API Key loaded:", !!process.env.GEMINI_API_KEY);

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/resume", resumeRoutes);
app.use("/api", analyzeRoutes);

// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "HireMind AI Backend Running 🚀",
  });
});


const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});