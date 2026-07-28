import { useResume } from "../context/ResumeContext";

function Results() {
  const { analysis } = useResume();
  console.log("Analysis:", analysis);

  if (!analysis) {
    return (
      <section className="results">
        <h2>Resume Analysis</h2>
        <p className="results-subtitle">
          Upload and analyze your resume to see AI insights.
        </p>
      </section>
    );
  }

  const resumeScore = analysis.resumeScore || 0;
  const atsScore = analysis.atsScore || 0;

  return (
    <section className="results">
      <h2>Resume Analysis</h2>

      <p className="results-subtitle">
        AI-powered insights generated from your resume.
      </p>

      <div className="scores">
        <div className="score-card">
          <h3>Resume Score</h3>
          <h1>{resumeScore}%</h1>

          <div className="progress">
            <div
              className="progress-fill resume"
              style={{ width: `${resumeScore}%` }}
            ></div>
          </div>
        </div>

        <div className="score-card">
          <h3>ATS Score</h3>
          <h1>{atsScore}%</h1>

          <div className="progress">
            <div
              className="progress-fill ats"
              style={{ width: `${atsScore}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="result-box" style={{ marginBottom: "20px" }}>
        <h3>📝 AI Summary</h3>
        <p>{analysis.summary}</p>
      </div>

      <div className="analysis-grid">
        <div className="result-box">
          <h3>💪 Strengths</h3>

          <ul>
            {analysis.strengths?.length ? (
              analysis.strengths.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            ) : (
              <li>No strengths returned.</li>
            )}
          </ul>
        </div>

        <div className="result-box">
          <h3>⚠️ Weaknesses</h3>

          <ul>
            {analysis.weaknesses?.length ? (
              analysis.weaknesses.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            ) : (
              <li>No weaknesses returned.</li>
            )}
          </ul>
        </div>

        <div className="result-box">
          <h3>❌ Missing Skills</h3>

          <ul>
            {analysis.missingSkills?.length ? (
              analysis.missingSkills.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            ) : (
              <li>No missing skills returned.</li>
            )}
          </ul>
        </div>

        <div className="result-box">
          <h3>💡 AI Suggestions</h3>

          <ul>
            {analysis.suggestions?.length ? (
              analysis.suggestions.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            ) : (
              <li>No suggestions returned.</li>
            )}
          </ul>
        </div>

        <div className="result-box">
          <h3>💻 Technical Interview Questions</h3>

          <ul>
            {analysis.technicalQuestions?.length ? (
              analysis.technicalQuestions.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            ) : (
              <li>No technical questions returned.</li>
            )}
          </ul>
        </div>

        <div className="result-box">
          <h3>👤 HR Interview Questions</h3>

          <ul>
            {analysis.hrQuestions?.length ? (
              analysis.hrQuestions.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            ) : (
              <li>No HR questions returned.</li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Results;