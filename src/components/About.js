import React from "react";
import "./About.css";
// Import icons from a library like Font Awesome
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-page">
      <h1>About Me</h1>
      <p>
        I am a passionate Full-Stack Developer focused on building modern,
        scalable, and user-friendly web, software, and mobile applications. I
        have experience across both front-end and back-end ecosystems, working
        with multiple frameworks, databases, and programming environments to
        deliver end-to-end solutions.
      </p>
      <p>
        Beyond development, I work with data visualization and business
        intelligence tools to turn complex data into actionable insights. I
        also build AI automation agents using platforms like n8n, Microsoft
        Power Automate, Microsoft Copilot Studio and Microsoft Foundry, helping
        businesses streamline processes through smart workflow automation.
      </p>
      <p>
        Driven by innovation and real-world problem-solving, I specialize in
        creating clean, functional, and dynamic applications, always striving
        to deliver high-quality, impactful digital solutions.
      </p>
      <p>
        <em>“Innovation begins where problem-solving meets passion.”</em>
      </p>
      {/* Social Media Icons Section */}
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/keval-shah-680087228/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="icon linkedin" />
        </a>
        <a
          href="https://github.com/shahkeval"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="icon github" />
        </a>
        <a
          href="mailto:shahkeval7383@gmail.com"
          aria-label="Email"
        >
          <FaEnvelope className="icon email" />
        </a>
        <a
          href="https://www.instagram.com/keval_shah_401"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="icon instagram" />
        </a>
      </div>
    </div>
  );
};

export default About;
