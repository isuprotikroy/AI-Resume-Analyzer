import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

console.log("API Key:", process.env.GEMINI_API_KEY ? "Loaded ✅" : "Missing ❌");

export const analyzeResume = async (resumeText) => {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  // rest of your code...
};
try {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Say hello in one word.",
  });

  console.log("Response:", response.text);
} catch (err) {
  console.error("Error:", err);
}