import React, { useState } from "react";
import BlogCard from "./BlogCard";
import "./Blog.css";

function PostList() {
  const [posts] = useState([
    {
      id: 1,
      title: "Getting Started with React",
      summary: "A beginner's guide to building interfaces using React.",
      author: "Ali Dev",
      date: "Aug 5, 2025",
    },
    {
      id: 2,
      title: "Modern JavaScript Features (ES6+)",
      summary: "Everything you need to know to write cleaner JS.",
      author: "Haram Codes",
      date: "Aug 6, 2025",
    },
    {
      id: 3,
      title: "Understanding React Hooks",
      summary: "Learn how to use useState, useEffect, and custom hooks in your projects.",
      author: "Sara Byte",
      date: "Aug 8, 2025",
    },
    {
      id: 4,
      title: "Styling in React: CSS, CSS-in-JS, and More",
      summary: "Explore different ways to style your React apps for maintainability and scalability.",
      author: "Devon Styles",
      date: "Aug 10, 2025",
    },
    {
      id: 5,
      title: "Deploying React Apps Easily",
      summary: "A step-by-step guide to deploying your React app to the web.",
      author: "Ali Dev",
      date: "Aug 12, 2025",
    },
    {
      id: 6,
      title: "React Router Deep Dive",
      summary: "Master navigation and routing in React with React Router.",
      author: "Haram Codes",
      date: "Aug 14, 2025",
    },
  ]);

  return (
    <div className="blog-list">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
