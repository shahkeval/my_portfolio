import React, { useState } from "react";
import "./Skills.css";

// Logo helpers: devicon (tech logos) and simple-icons (brand logos, coloured)
const dv = (name, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`;
const si = (slug, color = "1d2671") => `https://cdn.simpleicons.org/${slug}/${color}`;

const skillsData = {
  "Front-End": [
    { name: "HTML", logo: dv("html5") },
    { name: "CSS", logo: dv("css3") },
    { name: "JavaScript", logo: dv("javascript") },
    { name: "jQuery", logo: dv("jquery") },
    { name: "React", logo: dv("react") },
    { name: "Responsive Design", logo: dv("chrome") },
    { name: "Figma (UI/UX)", logo: dv("figma") },
  ],
  "Back-End": [
    { name: "C", logo: dv("c") },
    { name: "C++", logo: dv("cplusplus") },
    { name: "C#", logo: dv("csharp") },
    { name: "Python", logo: dv("python") },
    { name: "Java", logo: dv("java") },
    { name: "Node.js", logo: dv("nodejs") },
    { name: "Express.js", logo: dv("express", "original") },
    { name: "PHP", logo: dv("php") },
    { name: "SQL", logo: dv("mysql") },
    { name: "MongoDB", logo: dv("mongodb") },
    { name: "RESTful APIs", logo: si("openapiinitiative", "6ba539") },
    { name: "Postman", logo: dv("postman") },
    { name: "Authentication & Middleware", logo: si("jsonwebtokens", "d63aff") },
  ],
  Frameworks: [
    { name: "Django", logo: dv("django", "plain") },
    { name: "Laravel", logo: dv("laravel") },
    { name: "Spring Boot", logo: dv("spring") },
  ],
  "Machine Learning": [
    { name: "Python", logo: dv("python") },
    { name: "R Programming", logo: dv("r") },
    { name: "TensorFlow", logo: dv("tensorflow") },
    { name: "OpenCV", logo: dv("opencv") },
    { name: "Pandas", logo: dv("pandas") },
    { name: "NumPy", logo: dv("numpy") },
    { name: "Seaborn", logo: dv("seaborn") },
    { name: "Matplotlib", logo: dv("matplotlib") },
    { name: "NLTK", logo: dv("python") },
    { name: "Scikit-learn", logo: dv("scikitlearn") },
    { name: "LangChain", logo: si("langchain") },
  ],
  "AI Automation Tools": [
    { name: "n8n", logo: si("n8n", "ea4b71") },
    { name: "Power Automate", logo: "/logos/power-automate.svg" },
    { name: "Copilot Studio", logo: "/logos/copilot-studio.png" },
    { name: "Microsoft Foundry", logo: dv("azure") },
    { name: "make.com", logo: si("make", "6d00cc") },
    { name: "PhantomBuster", logo: "/logos/phantombuster.png" },
    { name: "OpenAI APIs", logo: "/logos/openai.svg" },
    { name: "API-based AI Integrations" },
  ],
  "Data & Visualization": [
    { name: "Tableau", logo: "https://www.logolynx.com/images/logolynx/e9/e988f6f1a112f57cb698c6b791f6a986.jpeg" },
    { name: "Power BI", logo: "https://logos-world.net/wp-content/uploads/2022/02/Power-BI-Logo.png" },
    { name: "Firebase", logo: dv("firebase") },
    { name: "Pinecone (Vector DB)", logo: "/logos/pinecone.png" },
    { name: "Studio 3T", logo: dv("mongodb") },
    { name: "Data Modeling & Insights", logo: dv("postgresql") },
  ],
  "DevOps / Source Control / Deployment": [
    { name: "Git", logo: dv("git") },
    { name: "GitHub", logo: si("github") },
    { name: "SourceTree", logo: dv("sourcetree") },
    { name: "Azure DevOps", logo: dv("azuredevops") },
    { name: "AWS (S3, Queue-Based Systems)", logo: dv("amazonwebservices") },
    { name: "Firebase Hosting", logo: dv("firebase") },
    { name: "Vercel", logo: si("vercel") },
  ],
  "App Development": [{ name: "Kotlin", logo: dv("kotlin") }],
};

// Shows the logo; falls back to an initials badge if missing or it fails to load
const SkillLogo = ({ name, logo }) => {
  const [failed, setFailed] = useState(false);
  if (!logo || failed) {
    const initials = name
      .replace(/[^A-Za-z0-9+# ]/g, "")
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();
    return <div className="skill-logo skill-logo-fallback">{initials}</div>;
  }
  return (
    <img
      src={logo}
      alt={name}
      className="skill-logo"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
};

const Skills = () => {
  return (
    <div className="skills-container">
      <h1>My Skills</h1>
      {Object.keys(skillsData).map((section, index) => (
        <div key={index} className="section">
          <h2>{section}</h2>
          <div className="skills-grid">
            {skillsData[section].map((skill, idx) => (
              <div
                key={idx}
                className="skill-item"
                style={{ "--i": idx + 1 }} // Dynamic delay for animations
              >
                <SkillLogo name={skill.name} logo={skill.logo} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
