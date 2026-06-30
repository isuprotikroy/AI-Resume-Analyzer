function Results() {
  return (
    <section className="results">

      <h2>Resume Analysis</h2>

      <div className="score-card">
        <h3>Resume Score</h3>
        <h1>92%</h1>
      </div>

      <div className="score-card">
        <h3>ATS Score</h3>
        <h1>87%</h1>
      </div>

      <div className="result-box">
        <h3>Strengths</h3>

        <ul>
          <li>✅ Strong React knowledge</li>
          <li>✅ Good project structure</li>
          <li>✅ Clear resume formatting</li>
        </ul>
      </div>

      <div className="result-box">
        <h3>Missing Skills</h3>

        <ul>
          <li>⚠ Docker</li>
          <li>⚠ AWS</li>
          <li>⚠ CI/CD</li>
        </ul>
      </div>

      <div className="result-box">
        <h3>AI Suggestions</h3>

        <ul>
          <li>Add measurable achievements.</li>
          <li>Highlight GitHub projects.</li>
          <li>Tailor your resume to the job description.</li>
        </ul>
      </div>

    </section>
  );
}

export default Results;