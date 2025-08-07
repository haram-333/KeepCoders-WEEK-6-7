import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleGoToPosts = () => {
    navigate('/posts');
  };

  return (
    <div className="home-container">
      <h1>Welcome to My Blog App 📝</h1>
      <p>
        Discover, read, and share insightful articles on web development, JavaScript, and modern tech. 
        Whether you're a beginner or a seasoned developer, you'll find something valuable here!
      </p>

      <div style={{ margin: '2rem 0' }}>
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
          alt="Blogging"
          style={{
            width: '100%',
            maxWidth: 400,
            borderRadius: 10,
            margin: '0 auto',
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)'
          }}
        />
      </div>

      <h2>✨ Features:</h2>
      <ul>
        <li>Browse curated blog posts</li>
        <li>Read full articles with clean, modern UI</li>
        <li>Easy navigation between posts</li>
        <li>Create and share your own posts</li>
      </ul>

      <h2>🛠️ Tech Stack:</h2>
      <ul>
        <li>React (Vite)</li>
        <li>JavaScript (ES6+)</li>
        <li>React Router</li>
        <li>Basic CSS</li>
      </ul>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
        <button className="home-btn" onClick={handleGoToPosts}>Browse Posts</button>
      </div>

      <footer style={{ marginTop: '2.5rem', color: '#888', fontSize: 14 }}>
        <span>
          🚀 Built for learning and sharing. Follow us on{' '}
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5' }}>
            Twitter
          </a>
          !
        </span>
      </footer>
    </div>
  );
};

export default Home;