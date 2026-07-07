import fs from "fs";
import pdfParse from "pdf-parse";
import { analyzeResume } from "../services/geminiService.js";

export const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No resume uploaded.",
      });
    }

    // Read uploaded PDF
    const buffer = fs.readFileSync(req.file.path);

    // Extract text
    const pdfData = await pdfParse(buffer);

    // Analyze with Gemini
    const aiResponse = await analyzeResume(pdfData.text);

    // Clean markdown if present
    const cleanedResponse = aiResponse
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    let analysis;

    try {
      analysis = JSON.parse(cleanedResponse);
    } catch (err) {
      console.error("JSON Parse Error:", err);

      return res.status(500).json({
        success: false,
        message: "Gemini returned an invalid response.",
        rawResponse: cleanedResponse,
      });
    }

    res.status(200).json({
      success: true,
      message: "Resume analyzed successfully!",
      file: {
        originalName: req.file.originalname,
        fileName: req.file.filename,
        size: req.file.size,
      },
      analysis,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to analyze resume.",
      error: error.message,
    });
  }
};