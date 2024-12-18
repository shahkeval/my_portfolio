import React from "react";
import "./About.css";
// Import icons from a library like Font Awesome
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-page">
      <h1>About Me</h1>
      <p>
        I am a dedicated Full Stack Developer with a diverse skill set, spanning
        front-end and back-end technologies, machine learning, and application
        development. On the front-end, I bring expertise in HTML, CSS,
        JavaScript, JQuery, and modern libraries like React, enabling me to
        craft dynamic, user-friendly interfaces. For back-end development, I am
        proficient in Python, Django, Node.js, Express.js, PHP, Laravel, C, C++,
        C#, Java, and database technologies such as SQL and MongoDB, ensuring
        robust and efficient server-side architecture.
      </p>
      <p>
        My passion for innovation extends to the field of machine learning,
        where I leverage tools like Python, R Programming, and MATLab to build
        intelligent systems and predictive models.
      </p>
      <p>
        This background allows me to integrate machine learning capabilities
        into applications, enhancing their functionality and user experience.
        Additionally, I have experience in mobile application development using
        Kotlin, enabling me to design and develop high-performance apps for
        Android platforms. With a focus on writing clean, maintainable code and
        solving complex problems, I strive to deliver high-quality solutions
        that meet both client and user needs.
      </p>
      <p>
        By combining technical versatility with a drive for continuous learning,
        I aim to create impactful software that bridges the gap between
        functionality and innovation.
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
