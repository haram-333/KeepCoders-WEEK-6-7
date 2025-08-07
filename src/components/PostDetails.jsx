import React from "react";
import { useParams } from "react-router-dom";
import "./Blog.css";

function PostDetails() {
  const { id } = useParams();

  const post = {
    1: {
      title: "Getting Started with React",
      content:
        "This is a full blog post about React basics. React helps you build UIs by using components. You'll learn about JSX, props, state, and how to compose your UI from small, reusable pieces. React's declarative approach makes it easy to reason about your app and manage complex interfaces.",
      author: "Ali Dev",
      date: "Aug 5, 2025",
    },
    2: {
      title: "Modern JavaScript Features (ES6+)",
      content:
        "ES6+ features like arrow functions, destructuring, let/const, template literals, and spread/rest operators make JS cleaner and more readable. Mastering these features will help you write more concise and maintainable code. Don't forget about async/await for easier asynchronous programming!",
      author: "Haram Codes",
      date: "Aug 6, 2025",
    },
    3: {
      title: "Understanding React Hooks",
      content:
        "Hooks like useState and useEffect let you use state and lifecycle features in functional components. Custom hooks allow you to extract and reuse logic across components. This post covers the basics and best practices for using hooks effectively in your React projects.",
      author: "Sara Byte",
      date: "Aug 8, 2025",
    },
    4: {
      title: "Styling in React: CSS, CSS-in-JS, and More",
      content:
        "There are many ways to style React apps: traditional CSS, CSS Modules, styled-components, and other CSS-in-JS solutions. Learn the pros and cons of each approach, and how to organize your styles for scalability and maintainability.",
      author: "Devon Styles",
      date: "Aug 10, 2025",
    },
    5: {
      title: "Deploying React Apps Easily",
      content:
        "Deploying your React app is easier than ever. This guide walks you through deploying to Netlify, Vercel, or GitHub Pages, and covers best practices for optimizing your build for production.",
      author: "Ali Dev",
      date: "Aug 12, 2025",
    },
    6: {
      title: "React Router Deep Dive",
      content:
        "React Router lets you handle navigation and routing in your React apps. Learn about dynamic routes, nested routes, and how to use hooks like useParams and useNavigate to build seamless navigation experiences.",
      author: "Haram Codes",
      date: "Aug 14, 2025",
    },
  }[id];

  if (!post) {
    return <div className="blog-container">Post not found 😢</div>;
  }

  return (
    <div className="blog-details">
      <h1 className="blog-title">{post.title}</h1>
      <div className="blog-meta">
        <span>By {post.author}</span>
        <span>{post.date}</span>
      </div>
      <p className="blog-content">{post.content}</p>
    </div>
  );
}

export default PostDetails;
