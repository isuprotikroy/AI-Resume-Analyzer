import { useRef, useState } from "react";

function UploadCard() {
  const fileInput = useRef();

  const [fileName, setFileName] = useState("No file selected");
  const [fileSize, setFileSize] = useState("");

  const handleClick = () => {
    fileInput.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFileName(file.name);
      setFileSize((file.size / 1024).toFixed(2));
    }
  };

  const handleAnalyze = async () => {
    const file = fileInput.current.files[0];

    if (!file) {
      alert("Please select a resume first.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const response = await fetch(
        "http://localhost:5001/api/resume/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      console.log(data);

      // Resume text extracted from the PDF
      const resumeText = data.extractedText;

      // Send the extracted text to the AI
      const aiResponse = await fetch(
        "http://localhost:5001/api/analyze",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            resumeText,
          }),
        }
      );

      const result = await aiResponse.json();

      console.log(result);

      alert("AI Analysis Complete!");
    } catch (error) {
      console.error(error);
      alert("Upload failed.");
    }
  };
  return (
    <section id="upload" className="upload-section">
      <h2>Upload Your Resume</h2>

      <p>
        Drag & drop your resume or click below to upload.
        We support PDF and DOCX files.
      </p>

      <div className="upload-card">
        <div className="upload-icon">📄</div>

        <h3>Choose Resume</h3>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          ref={fileInput}
          onChange={handleFileChange}
          hidden
        />

        <button
          className="upload-btn"
          onClick={handleClick}
        >
          Upload Resume
        </button>

        <div className="file-name">
          <p>📄 {fileName}</p>

          {fileSize && (
            <p>Size: {fileSize} KB</p>
          )}

          {fileName !== "No file selected" && (
            <div className="ready">
              <p>✅ Ready for AI Analysis</p>

              <button
                className="analyze-btn"
                onClick={handleAnalyze}
              >
                Analyze Resume
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default UploadCard;