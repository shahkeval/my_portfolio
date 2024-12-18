import React from "react";
import './Experience.css'; // Ensure this path is correct

const Experience = () => {
  const expdata = [
    { name: "Jarvis Techno Labs", role: "Full Stack Developer", time: "Current Working" },  
  ];

  return (
    <div className="experience-page">
      <h1>Experience</h1>
      <ul>
        {expdata.map((ex, index) => (
          <li key={index} className="experience-item">
            <a href="https://jarvistechnolabs.com/">
            <h2 className="company-name">{ex.name}</h2></a>
            <p className="role-time">
              {ex.role} <br />
              {ex.time}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
