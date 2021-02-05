import React from "react";
import BlogSummary from "./BlogSummary";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const BlogList = ({ posts, categories }) => {
  return (
    <div className="BlogList-section container">
      <div className="row">
        <div className="col-md-8">
          {posts &&
            posts.map((post, index) => (
              <Link to={`/post/${post.id}`} key={post.id}>
                <BlogSummary post={post} key={index} index={index} />
              </Link>
            ))}
        </div>

        <Sidebar categories={categories} />
      </div>
    </div>
  );
};

export default BlogList;
