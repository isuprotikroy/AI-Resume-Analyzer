import { GoogleGenAI } from "@google/genai";

console.log("🔥 geminiService.js loaded");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const analyzeResume = async (resumeText) => {
  console.log("🔥 analyzeResume() called");
  console.log(
    "API Key:",
    process.env.GEMINI_API_KEY ? "Loaded ✅" : "Missing ❌"
  );

  const prompt = `
You are an expert ATS Resume Analyzer.

Return ONLY valid JSON.

{
  "atsScore": 80,
  "resumeScore": 80,
  "summary": "Test"
}

Resume:
${resumeText}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  console.log("🔥 Gemini response received");

  return response.text;
};