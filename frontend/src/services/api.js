const BASE_URL = "http://localhost:5001/api";

export const uploadResume = async (formData) => {
  const response = await fetch(`${BASE_URL}/resume/upload`, {
    method: "POST",
    body: formData,
  });

  return response.json();
};

export const analyzeResume = async (resumeText) => {
  const response = await fetch(`${BASE_URL}/analyze`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      resumeText,
    }),
  });

  return response.json();
};