import React from "react";
import "./Projects.css";

const projectData = [
  {
    name: "Payroll Management System",
    image: "project1.png",
    liveDemo: "https://github.com/shahkeval/Payroll_/tree/master",
    des: "The Payroll Management System is a web-based solution for managing employee details, salaries, and leave records efficiently. Admins can handle employee profiles, generate monthly salaries, and monitor leave applications. Employees can apply for Sick Leave, Casual Leave, or Other Leave, with a strict 5-day limit per type—exceeding this incurs a ₹350 deduction per additional day. Employees can view and download detailed salary reports, including deductions. The system features a user-friendly, responsive interface for seamless use on all devices, streamlining payroll processes, reducing errors, and enhancing productivity for modern organizations.",
  },
  {
    name: "Employee Management System",
    image: "project2.png",
    liveDemo: "https://github.com/shahkeval/java_emp/tree/master",
    des: "The Employee Management System is a desktop application built using Core Java in the NetBeans IDE. It simplifies managing employee records by enabling operations like adding, displaying, updating, and searching employees based on fields such as Employee ID, Name, or Department. With a user-friendly interface and modular design, the system ensures efficient data retrieval, accuracy, and consistency. It demonstrates strong Object-Oriented Programming concepts, leveraging Java's capabilities for interactive, data-driven desktop applications.",
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
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                />
                <h3>{project.name}</h3>
              </div>
              {/* Back Side */}
              <div className="project-back">
                <p>{project.des ? project.des : "No description available."}</p>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-demo-button"
                >
                  View On Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
