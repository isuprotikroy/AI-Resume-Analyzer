export const uploadResume = (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "No resume uploaded.",
    });
  }

  res.status(200).json({
    success: true,
    message: "Resume uploaded successfully!",
    file: {
      originalName: req.file.originalname,
      fileName: req.file.filename,
      size: req.file.size,
      path: req.file.path,
    },
  });
};