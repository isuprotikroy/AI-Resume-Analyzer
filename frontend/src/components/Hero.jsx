function Hero() {
  const scrollToUpload = () => {
    document.getElementById("upload")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero">
      <div className="badge">
        🚀 AI-Powered Career Assistant
      </div>

      <h1>
        Land Your Dream Job
        <br />
        with AI
      </h1>

      <p>
        Upload your resume, receive an instant ATS score, uncover skill gaps,
        and prepare for interviews with personalized AI-powered feedback.
      </p>

      <div className="hero-buttons">
        <button
          className="primary-btn"
          onClick={scrollToUpload}
        >
          Upload Resume
        </button>

        <button
          className="secondary-btn"
          onClick={() => alert("Demo Coming Soon 🚀")}
        >
          Try Demo
        </button>
      </div>

      <div className="hero-features">
        <span>✓ ATS Score</span>
        <span>✓ Resume Analysis</span>
        <span>✓ AI Interview</span>
        <span>✓ Skill Gap Detection</span>
      </div>
    </section>
  );
}

export default Hero;