import fs from "fs";
import pdfParse from "pdf-parse";

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

    res.status(200).json({
      success: true,
      message: "Resume uploaded and parsed successfully!",
      file: {
        originalName: req.file.originalname,
        fileName: req.file.filename,
        size: req.file.size,
      },
      extractedText: pdfData.text,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to parse resume.",
    });
  }
};