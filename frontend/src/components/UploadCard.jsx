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

  return (
    <section className="upload-section">
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

  <button className="analyze-btn">
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