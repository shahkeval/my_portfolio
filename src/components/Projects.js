import React from "react";
import "./Projects.css";

const projectData = [
  {
    name: "AI-Powered Multi-Document Search & Reporting System (Senior Living Communities)",
    tech: "Python, Pandas, Generative AI APIs, LLMs, OpenAI APIs, OpenAI Files API, PostgreSQL, AI Sandbox, OpenAI Containers",
    des: "Leading the AI solutions and technical implementation for the Senior Living Communities project. Integrates OpenAI Files API for document upload, storage, retrieval and AI processing; implements multi-file search and information gathering; uses multi-agent orchestration for document analysis, extraction and report generation; consolidates data into structured outputs, dashboards and analytical reports; and maintains tenant-wise and community-wise information isolation.",
  },
  {
    name: "AI-Powered Business Automation & Intelligence System",
    tech: "Microsoft Copilot Studio, Microsoft Foundry, Generative AI, Power Automate, APIs, GitLab",
    des: "An enterprise AI system that automates business workflows, generates job briefings, compares quotations, analyzes GitLab repositories, and produces intelligent reports and alerts using AI agents and integrated business data. Enables natural-language access to actionable insights through AI-driven analysis, summarization, comparison and decision-support workflows.",
  },
  {
    name: "AI-Powered Social Media Content Automation System",
    tech: "Python, Generative AI APIs, LLMs, Image Generation Models, n8n / Power Automate, Email APIs, Social Media APIs",
    des: "End-to-end AI automation for social media content. Users give a text prompt (e.g. a festive post with company branding) and the system generates branded images and captions, sends them for email-based human-in-the-loop approval, refines prompts through a feedback loop, and publishes to Instagram and Facebook via official APIs, removing manual marketing effort.",
  },
  {
    name: "Lead Management System",
    tech: "MERN (MongoDB, Express.js, React.js, Node.js)",
    des: "A lead tracking platform with role-based access control for Super Admin, Sales Manager and Salesperson. Includes appointment creation, calendar scheduling, office mapping and lead assignment, with secure authentication and fine-grained user permission logic.",
  },
  {
    name: "CRM System (Client & Order Management)",
    tech: "MEAN (MongoDB, Express.js, Angular, Node.js)",
    des: "A CRM to manage clients, orders and follow-ups with CRUD modules, filtering/search and basic analytics, simulating real-world sales processes in a structured, database-driven environment.",
  },
  {
    name: "Sentiment Analysis on Large-Scale Dataset (Research Project)",
    tech: "Python, NLP, Machine Learning",
    des: "Sentiment analysis on a real-world dataset of 350,000+ rows: data cleaning, preprocessing, tokenization, feature engineering, ML text classification, evaluation with accuracy, precision, recall and F1-score, and hyperparameter tuning. A research paper was published based on this implementation.",
  },
  {
    name: "Payroll Management System",
    image: "/project1.png",
    liveDemo: "https://github.com/shahkeval/Payroll_/tree/master",
    des: "The Payroll Management System is a web-based solution for managing employee details, salaries, and leave records efficiently. Admins can handle employee profiles, generate monthly salaries, and monitor leave applications. Employees can apply for Sick Leave, Casual Leave, or Other Leave, with a strict 5-day limit per type. Exceeding this incurs a ₹350 deduction per additional day. Employees can view and download detailed salary reports, including deductions.",
  },
  {
    name: "Employee Management System",
    image: "/project2.png",
    liveDemo: "https://github.com/shahkeval/java_emp/tree/master",
    des: "The Employee Management System is a desktop application built using Core Java in the NetBeans IDE. It simplifies managing employee records by enabling operations like adding, displaying, updating, and searching employees based on fields such as Employee ID, Name, or Department. With a user-friendly interface and modular design, the system ensures efficient data retrieval, accuracy, and consistency.",
  },
];

const Projects = () => {
  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-inner">
              {/* Front Side */}
              <div className="project-front">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="project-image"
                  />
                )}
                <h3>{project.name}</h3>
                {project.tech && <p className="project-tech">{project.tech}</p>}
              </div>
              {/* Back Side */}
              <div className="project-back">
                <p>{project.des ? project.des : "No description available."}</p>
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-demo-button"
                  >
                    View On Github
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
