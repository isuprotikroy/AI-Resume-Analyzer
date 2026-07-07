import { GoogleGenAI } from "@google/genai";

console.log("Gemini key exists:", !!process.env.GEMINI_API_KEY);
console.log(
  "Gemini key prefix:",
  process.env.GEMINI_API_KEY?.substring(0, 8)
);

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const analyzeResume = async (resumeText) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Reply with exactly: OK",
  });

  return response.text;
};