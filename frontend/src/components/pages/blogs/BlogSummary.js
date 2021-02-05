/*jshint esversion: 6 */
import React from "react";
import Smiling_Ladies from "../../images/Smiling_Ladies.png";
import ReactHtmlParser from "react-html-parser";

const BlogSummary = ({ post }) => {
  return (
    <div className="card mt-3 mb-4">
      <img
        className="card-img-top img-fluid"
        src={Smiling_Ladies}
        alt=""
        style={{}}
      />
      <div className="card-body">
        <h3 className="font-weight-bold mb-3 p-0">
          <strong>{post.title}</strong>
        </h3>
        <p>{ReactHtmlParser(post.content)}</p>
        <p>
          by
          <strong>
            {"  "}
            {post.authorFirstName} {post.authorLastName}{" "}
          </strong>
          , {post.createdAt}
        </p>
      </div>
    </div>
  );
};

export default BlogSummary;
