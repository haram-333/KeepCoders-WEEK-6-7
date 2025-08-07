import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="home-container" style={{ minHeight: "60vh" }}>
      <h1>About This Blog 🚀</h1>
      <p>
        Welcome to <strong>MyBlog</strong>! This project is a simple, modern blog platform built with React. 
        It was created to help developers learn, share, and explore articles on web development, JavaScript, and the latest tech trends.
      </p>
      <h2>👩‍💻 Who Made This?</h2>
      <p>
        MyBlog is a demo project crafted by me. 
        The goal is to provide a clean, easy-to-navigate space for reading and sharing knowledge.
      </p>
      <h2>🛠️ What’s Inside?</h2>
      <ul>
        <li>Browse curated blog posts on modern web development</li>
        <li>Read full articles with a clean, responsive UI</li>
        <li>Easy navigation between posts and pages</li>
        <li>Built with React, React Router, and basic CSS</li>
      </ul>
      <h2>🌟 Why This Project?</h2>
      <p>
        This blog app is designed as a learning tool for those new to React or looking to practice building real-world interfaces. 
        It demonstrates component-based architecture, routing, and simple state management.
      </p>
      <footer style={{ marginTop: "2.5rem", color: "#888", fontSize: 14 }}>
        <span>
          Made with <span role="img" aria-label="love">❤️</span> by the Haram. 
          Follow us on{" "}
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#4f46e5" }}>
            Twitter
          </a>
          !
        </span>
      </footer>
    </div>
  );
};

export default About;
