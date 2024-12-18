import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>hello</h1>
        <img
          src="nav_profile.jpg"
          alt="User Profile"
          className="user-image"
        />
        </div>
          <div>
        <h2>My Prtfolio</h2>
      </div>
      <div className="navbar-right">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        <button className="like-button">
          ❤️ <span className="like-count">123</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
