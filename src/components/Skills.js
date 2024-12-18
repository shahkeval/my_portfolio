import React from "react";
import "./Skills.css";

const skillsData = {
  "Front-End": [
    { name: "HTML", logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
    { name: "CSS", logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
    { name: "JavaScript", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
    { name: "Jquery", logo: "https://w7.pngwing.com/pngs/606/221/png-transparent-jquery-original-logo-icon.png"},
    { name: "React", logo: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
  ],
  "Back-End": [
    { name: "C", logo: "https://www.kindpng.com/picc/m/403-4039227_c-language-logo-png-transparent-png.png"},
    { name: "C++", logo: "https://brandlogos.net/wp-content/uploads/2022/01/c-brandlogo.net_.png"},
    { name: "C#", logo: "https://static-00.iconduck.com/assets.00/csharp-icon-440x512-dt79kug9.png"},
    { name: "Python", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
    
    { name: "Java", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png" },
    { name: "Node.js", logo: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
    { name: "Express.js", logo: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" },
    { name: "PHP", logo: "https://cdn-icons-png.flaticon.com/512/919/919830.png" },
    
    { name: "SQL", logo: "https://cdn-icons-png.flaticon.com/512/1051/1051275.png" },
    { name: "MongoDB", logo: "https://technologypoint.in/wp-content/uploads/2021/06/MongoDB-sm-logo.gif" },
  ],
  "FrameWorks":[
    { name: "Django", logo: "https://logodix.com/logo/1758903.png" },
    { name: "Laravel", logo: "https://tse1.mm.bing.net/th?id=OIP.s7ZEqkmVrugV-4MdcVxMaAHaHa&pid=Api&P=0&h=180"},
    { name: "Spring Boot", logo: "https://banner2.cleanpng.com/20180328/ace/kisspng-spring-framework-representational-state-transfer-j-spring-5abb1a637c6711.3394662515222114275096.jpg" },

  ],

  "Machine Learning": [
    { name: "Python", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
    { name: "R Programing", logo: "https://tse4.mm.bing.net/th?id=OIP.13rgyycEnzGWV-ZsL0N5pgAAAA&pid=Api&P=0&h=180" },
    { name: "MATLab", logo: "https://tse1.mm.bing.net/th?id=OIP.ThECG8m16BKeW0JAX58bvQHaEK&pid=Api&P=0&h=180" },
  ],

  "Data Analytics":[
    { name: "Tableau", logo: "https://www.logolynx.com/images/logolynx/e9/e988f6f1a112f57cb698c6b791f6a986.jpeg" },
    { name: "Power BI ", logo: "https://logos-world.net/wp-content/uploads/2022/02/Power-BI-Logo.png" },
  ],
  "App Devlopment":[
    { name: "Kotlin", logo: "https://ih1.redbubble.net/image.1058387488.1288/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg" },

  ],
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
                <img src={skill.logo} alt={skill.name} className="skill-logo" />
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
