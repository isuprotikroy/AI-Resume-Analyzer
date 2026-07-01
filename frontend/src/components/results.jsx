function Results() {

  const resumeScore = 92;
  const atsScore = 87;
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

      <div className="analysis-grid">

        <div className="result-box">
          <h3>💪 Strengths</h3>

          <ul>
            <li>Strong React knowledge</li>
            <li>Clean project structure</li>
            <li>Well-formatted resume</li>
          </ul>
        </div>

        <div className="result-box">
          <h3>⚠ Missing Skills</h3>

          <ul>
            <li>Docker</li>
            <li>AWS</li>
            <li>CI/CD</li>
          </ul>
        </div>

        <div className="result-box">
          <h3>💡 AI Suggestions</h3>

          <ul>
            <li>Add measurable achievements.</li>
            <li>Include more project keywords.</li>
            <li>Tailor the resume for each job.</li>
          </ul>
        </div>

        <div className="result-box">
          <h3>🎤 Interview Questions</h3>

          <ul>
            <li>Explain React Hooks.</li>
            <li>What is Virtual DOM?</li>
            <li>Difference between SQL & NoSQL?</li>
          </ul>
        </div>

      </div>

    </section>
  );
}

export default Results;