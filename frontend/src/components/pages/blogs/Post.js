import React from "react";
import useFetch from "../cms/useFetch";
import BlogList from "./BlogList";

const Post = () => {
  const { posts, isLoading, error } = useFetch("http://localhost:8000/posts");
  const { categories } = useFetch("http://localhost:8000/categories");

  return (
    <div className="container">
      <div className="row my-4">
        <div className="col">
          <h3 className="h1-responsive font-weight-bold text-center">
            Recent posts
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {error && <div>{error}</div>}
          {isLoading && <div>Loading...</div>}
          <BlogList posts={posts} categories={categories} />
        </div>
      </div>
    </div>
  );
};

export default Post;
