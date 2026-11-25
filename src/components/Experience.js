import React from "react";
import "./Experience.css";

const expdata = [
  {
    name: "iPath Infotech Pvt. Ltd.",
    link: "https://ipathinfotech.com/",
    role: "Jr. AI/ML Developer",
    time: "Apr 2026 - Present",
    points: [
      "Developing AI-powered agents and automation workflows using Microsoft Copilot Studio, Microsoft Foundry, OpenAI APIs, and Generative AI to automate business processes.",
      "Building AI solutions for job briefing, quotation comparison, intelligent alerts, automated reporting, and business-data analysis using multi-agent orchestration.",
      "Implementing OpenAI Files API and container-based workflows for document storage, processing, and AI-powered information extraction from multiple file formats.",
      "Technical Lead – AI Development: Leading AI-related technical implementation for the Senior Living Community project, working with multiple document formats to extract information and generate structured insights, dashboards, and analytical reports.",
    ],
  },
  {
    name: "Jarvis Technolabs",
    link: "https://jarvistechnolabs.com/",
    role: "Full Stack Developer / AI Automation Engineer (Internship)",
    time: "2024 - 2026",
    points: [
      "Developed and optimized a dynamic Lead Management System with role based access control using the MERN stack (MongoDB, Express.js, React.js, Node.js), implementing modular architecture and secure REST APIs to support scalable business operations.",
      "Automated complex business processes by designing intelligent workflows using n8n, Power Automate (Microsoft 365), and custom Python scripts, integrating AI services to reduce manual effort and increase productivity.",
    ],
  },
];

const education = [
  {
    degree: "Master of Science in Information Technology",
    place: "LJ Institute of Computer Application",
    time: "2024 - 2026",
  },
  {
    degree: "Bachelor of Science in Information Technology",
    place: "LJ Institute of Computer Application",
    time: "2021 - 2024",
  },
];

const certifications = [
  "Introduction to Artificial Intelligence (AI) – IBM – Mar 2025",
  "Introduction to Data Analytics – IBM – Mar 2025",
  "Introduction to Machine Learning with Python – Arizona State University – Mar 2025",
  "Foundations of Cybersecurity – Google – Nov 2024",
  "Blockchain Basics – University at Buffalo & The State University of New York – Oct 2024",
  "Enterprise and Infrastructure Security – New York University – Mar 2024",
  "Build a Firebase Android Application – Coursera – Mar 2024",
  "Building Web Applications in Django – University of Michigan – Aug 2023",
  "Google SEO Fundamentals – University of California, Davis – Jun 2023",
];

const achievements = [
  "Published research paper titled “Socializing NLG, NLP & NLU Through AI: Real-World Application and Future Perspective”.",
  "Presented 4 research posters at IFERP and ICARCE conferences.",
  "Awarded 2nd Prize in poster presentation at IFERP.",
  "Represented LJ University at the 36th Inter-University West Zone Youth Festival (Ganpat University, Mehsana) in Theatre Skit & Mime.",
];

const languages = ["Gujarati", "Hindi", "English"];

const Experience = () => {
  return (
    <div className="experience-page">
      <h1>Experience</h1>
      <ul>
        {expdata.map((ex, index) => (
          <li key={index} className="experience-item">
            <a href={ex.link} target="_blank" rel="noopener noreferrer">
              <h2 className="company-name">{ex.name}</h2>
            </a>
            <p className="role-time">
              <strong>{ex.role}</strong> <br />
              {ex.time}
            </p>
            <ul className="detail-list">
              {ex.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <h1>Education</h1>
      <ul>
        {education.map((ed, index) => (
          <li key={index} className="experience-item">
            <h2 className="company-name">{ed.degree}</h2>
            <p className="role-time">
              {ed.place} <br />
              {ed.time}
            </p>
          </li>
        ))}
      </ul>

      <h1>Certifications</h1>
      <ul>
        <li className="experience-item">
          <ul className="detail-list">
            {certifications.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </li>
      </ul>

      <h1>Achievements</h1>
      <ul>
        <li className="experience-item">
          <ul className="detail-list">
            {achievements.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </li>
      </ul>

      <h1>Languages</h1>
      <ul>
        <li className="experience-item">
          <p className="role-time">{languages.join(" • ")}</p>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
