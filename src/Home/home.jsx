import "./home.css";
import home_bg from "./home-page.png";
import Typewriter from "typewriter-effect";


function Home() {
  return (
    <div className="content">
      <div className="text-content">
        <div className="name-container">Maddy</div>

        <div className="main-content">
          <Typewriter
            options={{
              strings: ["Your developer for modern<br/>web applications"],
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 80,
            }}
          />
        </div>

        <p className="sub-content">
          Turning ideas into well-structured and reliable web applications.
          <br />
          Focused on clean backend logic, modern frontend development,
          <br />
          with working knowledge of machine learning and intelligent systems.
        </p>
        <div className="header-icons">Connect with me</div>
        <div className="icons">
          <a
            href="https://github.com/Madhavan1232"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <i className="ri-github-fill icon"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/madhavan-v-586343305/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <i className="ri-linkedin-box-line icon"></i>
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=madhavanvairavan@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <i className="ri-mail-line icon"></i>
          </a>

          <a
            href="https://www.instagram.com/maddy_luxe/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <i class="ri-instagram-line icon"></i>
          </a>
        </div>
        
        <div className="resumer-container">
          <a 
            href="https://github.com/Madhavan1232/resume/raw/main/Resume.pdf"
            className="resume-btn"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="profile-img">
        <img src={home_bg} alt="Profile" />
      </div>
    </div>
  );
}

export default Home;
