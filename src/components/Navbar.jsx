import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when a link is clicked (for mobile UX)
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span role="img" aria-label="rocket" className="navbar-logo-emoji">🚀</span>
        MyBlog
      </div>
      {/* Hamburger menu icon for mobile */}
      <button
        className={`navbar-hamburger${menuOpen ? ' open' : ''}`}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
        type="button"
      >
        <span className="navbar-hamburger-bar"></span>
        <span className="navbar-hamburger-bar"></span>
        <span className="navbar-hamburger-bar"></span>
      </button>
      <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
        <li>
          <a href="/" onClick={handleLinkClick}>Home</a>
        </li>
        <li>
          <a href="/posts" onClick={handleLinkClick}>
            Posts
            <span className="navbar-badge">New</span>
          </a>
        </li>
        <li>
          <a href="/about" onClick={handleLinkClick}>About</a>
        </li>
      </ul>
      <div className="navbar-actions">
        <input
          type="text"
          placeholder="Search..."
          className="navbar-search"
        />
        <button>
          <span className="text">Button</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
