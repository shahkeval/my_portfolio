import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Welcome from "./components/welcome";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import CustomAlert from "./components/CustomAlert"; // Import the CustomAlert component

function App() {
  const [likes, setLikes] = useState(() => {
    const savedLikes = localStorage.getItem("likes");
    return savedLikes ? parseInt(savedLikes) : 0;
  });

  const [alert, setAlert] = useState(null); // For the custom alert
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLike = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/like");
      setAlert({ message: response.data.message, type: "success" }); // Show success alert
      setLikes(response.data.likeCount); // Update likes count
      localStorage.setItem("likes", response.data.likeCount); // Save to localStorage
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setAlert({ message: error.response.data.message, type: "error" }); // Show error alert
      } else {
        console.error("An error occurred:", error);
      }
    }
  };

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/like");
        setLikes(response.data.likeCount);
        localStorage.setItem("likes", response.data.likeCount); // Save to localStorage
      } catch (error) {
        console.error("Error fetching like count:", error);
      }
    };

    fetchLikes();
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeAlert = () => setAlert(null); // Close alert handler

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="navbar-left">
            <img
              src="nav_profile.jpg"
              alt="User"
              className="user-image"
              onClick={toggleModal}
            />
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

        {/* Render CustomAlert if alert is active */}
        {alert && (
          <CustomAlert
            message={alert.message}
            type={alert.type}
            onClose={closeAlert}
          />
        )}

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>

        {isModalOpen && (
          <div className="modal" onClick={toggleModal}>
            <img src="nav_profile.jpg" alt="Profile Enlarged" className="modal-image" />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
