import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

function BlogCard({ post }) {
  return (
    <div className="blog-card">
      <div>
        <h2 className="blog-title">{post.title}</h2>
        <p className="blog-summary">{post.summary}</p>
      </div>
      <div className="blog-meta">
        <span>By {post.author}</span>
        <span>{post.date}</span>
      </div>
      <Link to={`/post/${post.id}`} className="read-more">
        Read More →
      </Link>
    </div>
  );
}

export default BlogCard;
