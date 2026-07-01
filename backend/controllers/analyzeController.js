import { analyzeResume } from "../services/geminiService.js";

export const analyzeResumeController = async (req, res) => {
  try {
    const { resumeText } = req.body;

    if (!resumeText) {
      return res.status(400).json({
        success: false,
        message: "Resume text is required.",
      });
    }

    const result = await analyzeResume(resumeText);

    // Gemini sometimes wraps JSON in ```json ... ```
    const cleanedResult = result
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsedResult = JSON.parse(cleanedResult);

    res.json({
      success: true,
      analysis: parsedResult,
    });
  } catch (error) {
    console.error("AI Analysis Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to analyze resume.",
    });
  }
};