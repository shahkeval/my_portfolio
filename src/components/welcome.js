import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-left">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I’m Keval Shah, an <span>AI / ML Engineer &amp; Full Stack Developer</span> building scalable web applications and AI automation solutions. Let's build something amazing together!
        </p>
        <a
          href="/resume.pdf"
          download="Keval_Shah_resume.pdf"
          className="download-btn"
        >
          Download Resume
        </a>
      </div>
      <div className="welcome-right">
        <img
          src="/main_profile2.jpg"
          alt="Profile"
          className="profile-image"
        />
      </div>
    </div>
  );
};

export default Welcome;
