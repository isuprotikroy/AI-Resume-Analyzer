function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-icon">⚡</span>
        <span>ResumeFlow</span>
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#upload">Resume Analyzer</a></li>
        <li><a href="#results">Results</a></li>
      </ul>

      <div className="nav-buttons">
        <a
          href="https://github.com/Kephh/AI-Resume-Analyzer"
          target="_blank"
          rel="noreferrer"
          className="github-btn"
        >
          GitHub
        </a>

        <button
          className="try-btn"
          onClick={() =>
            document
              .getElementById("upload")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Try Free →
        </button>
      </div>
    </nav>
  );
}

export default Navbar;