import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Welcome from "./components/welcome";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

function App() {
  // Initialize likes count from localStorage
  const [likes, setLikes] = useState(() => {
    const savedLikes = localStorage.getItem("likes");
    return savedLikes ? parseInt(savedLikes) : 0;
  });

  // Function to handle like button click
  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem("likes", newLikes); // Save new value to localStorage
  };

  // Sync likes count from localStorage on page load
  useEffect(() => {
    const savedLikes = localStorage.getItem("likes");
    if (savedLikes) {
      setLikes(parseInt(savedLikes));
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="navbar-left">
            <img src="nav_profile.jpg" alt="User" className="user-image" />
          </div>
          <div className="logo">MyPortfolio</div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/experience">Experience</Link></li>
          </ul>
          <button className="like-button" onClick={handleLike}>
            ❤️ {likes} Likes
          </button>
        </nav>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
