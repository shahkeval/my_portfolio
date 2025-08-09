import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-left">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I’m a <span>Full-Stack Developer</span> who loves crafting beautiful and functional web applications. Let's build something amazing together!
        </p>
        <a
          href="/Keval_Associate_Software_Engineer.pdf" 
          download="KevalShah_Resume.pdf" 
          className="download-btn"
        >
          Download Resume
        </a>
      </div>
      <div className="welcome-right">
        <img
          src="main_profile2.jpg"
          alt="Profile"
          className="profile-image"
        />
      </div>
    </div>
  );
};

export default Welcome;
