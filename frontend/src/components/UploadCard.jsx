import { useRef, useState } from "react";
import { useResume } from "../context/ResumeContext";
import { uploadResume } from "../services/api";

function UploadCard() {
  const fileInput = useRef();

  const [fileName, setFileName] = useState("No file selected");
  const [fileSize, setFileSize] = useState("");

  const { setAnalysis, loading, setLoading } = useResume();

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
      setLoading(true);

      // Upload + AI analysis
      const uploadData = await uploadResume(formData);

      console.log("Backend Response:", uploadData);

      if (!uploadData.success) {
        alert(uploadData.message || "Analysis failed.");
        return;
      }

      // Save analysis globally
      setAnalysis(uploadData.analysis);

      // Scroll to results
      document
        .querySelector(".results")
        ?.scrollIntoView({ behavior: "smooth" });

    } catch (error) {
      console.error("Upload Error:", error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="upload" className="upload-section">
      <h2>Upload Your Resume</h2>

      <p>
        Upload your PDF resume and let AI analyze your skills,
        ATS compatibility, and improvement areas.
      </p>

      <div className="upload-card">
        <div className="upload-icon">📄</div>

        <h3>Choose Resume</h3>

        <input
          type="file"
          ref={fileInput}
          accept=".pdf"
          hidden
          onChange={handleFileChange}
        />

        <button className="upload-btn" onClick={handleClick}>
          Upload Resume
        </button>

        <div className="file-name">
          <p>{fileName}</p>

          {fileSize && <p>Size: {fileSize} KB</p>}
        </div>

        {fileName !== "No file selected" && (
          <div className="ready">
            <p>✅ Ready for AI Analysis</p>

            <button
              className="analyze-btn"
              onClick={handleAnalyze}
              disabled={loading}
            >
              {loading ? "Analyzing..." : "Analyze Resume"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default UploadCard;