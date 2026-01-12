import "./projects.css";

function Projects() {
  return (
    <div className="projects-container">

      <div className="projects-main-row">
        <span className="nav-arrow">&larr;</span>

        <div className="projects-header">
          <span className="title">My Works</span>
          <p className="project-text">
            Selected projects showcasing clean design, solid backend logic,
            and real-world usability
          </p>
        </div>

        <span className="nav-arrow">&rarr;</span>
      </div>

      <div className="project-list">

        <div className="project-item">
          <div className="project-card">

            <div className="project-header">
              <span className="title-line">Freelancer</span>
              <span className="title-line second">Marketplace</span>
              <span className="project-type">Full Stack</span>
            </div>

            <p className="project-desc">
              Flexora is a modern freelance platform developed using React, Spring Boot, and MySQL
            </p>

            <div className="project-techs">
              <span>React</span>
              <span>Spring Boot</span>
              <span>MySQL</span>
            </div>

            <div className="action-btn">
              <button
                className="live-btn"
                onClick={() =>
                  window.open(
                    "https://madhavan1232.github.io/freelance-marketplace/"
                  )
                }
              >
                Live Demo
              </button>
              <button
                className="code-btn"
                onClick={() =>
                  window.open(
                    "https://github.com/Madhavan1232/freelance-marketplace"
                  )
                }
              >
                Source Code
              </button>
            </div>

          </div>
        </div>

        <div className="project-item">
          <div className="project-card">

            <div className="project-header">
              <span className="title-line">Quiz</span>
              <span className="title-line second">Application</span>
              <span className="project-type">Frontend</span>
            </div>

            <p className="project-desc">
              A React-based quiz app using JSON data
              for fast and interactive gameplay
            </p>

            <div className="project-techs">
              <span>React</span>
              <span>JavaScript</span>
              <span>JSON</span>
            </div>

            <div className="action-btn">
              <button
                className="live-btn"
                onClick={() =>
                  window.open("https://madhavan1232.github.io/quizapp/")
                }
              >
                Live Demo
              </button>
              <button
                className="code-btn"
                onClick={() =>
                  window.open("https://github.com/Madhavan1232/quizapp")
                }
              >
                Source Code
              </button>
            </div>

          </div>
        </div>

        <div className="project-item">
          <div className="project-card">

            <div className="project-header">
              <span className="title-line">QuickFix</span>
              <span className="title-line second">Local Finder</span>
              <span className="project-type">Backend</span>
            </div>

            <p className="project-desc">
              Backend REST APIs built with Spring Boot
              for a local service finder platform
            </p>

            <div className="project-techs">
              <span>Spring Boot</span>
              <span>SQL</span>
              <span>REST API</span>
            </div>

            <div className="action-btn">
              <button className="live-btn">API Only</button>
              <button className="code-btn" onClick={() => window.open("https://github.com/Madhavan1232/quickfix")}>Source Code</button>
            </div>

          </div>
        </div>

        <div className="project-item">
          <div className="project-card">

            <div className="project-header">
              <span className="title-line">Personal</span>
              <span className="title-line second">Portfolio</span>
              <span className="project-type">Frontend</span>
            </div>

            <p className="project-desc">
              A modern React portfolio with smooth animations
              and a clean premium UI
            </p>

            <div className="project-techs">
              <span>React</span>
              <span>CSS</span>
              <span>Framer Motion</span>
            </div>

            <div className="action-btn">
              <button className="live-btn" onClick={() => window.open("https://madhavan1232.github.io/portfolio/")}>Live Demo</button>
              <button className="code-btn" onClick={() => window.open("https://github.com/Madhavan1232/portfolio")}>Source Code</button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;
