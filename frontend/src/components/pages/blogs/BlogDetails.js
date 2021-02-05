import React from "react";
import { useParams } from "react-router-dom";
import Smiling_Ladies from "../../images/Smiling_Ladies.png";
import useFetch from "../cms/useFetch";
import ReactHtmlParser from "react-html-parser";
import Sidebar from "./Sidebar";

const BlogDetails = (props) => {
  const { id } = useParams();
  const { posts, isLoading, error } = useFetch(
    "http://localhost:8000/posts/" + id
  );

  return (
    <div className="Details">
      <div className="container mb-3">
        <div class="row">
          <div className="col-md-8 my-3">
            {isLoading && <div>Loading...</div>}
            {error && <div> {error}</div>}
            {posts && (
              <div>
                <img
                  src={Smiling_Ladies}
                  className="img-fluid"
                  alt={posts.title + "'s image"}
                />
                <h4 className="font-weight-bold">{posts.title}</h4>
                <p className="lead">{ReactHtmlParser(posts.content)}</p>
              </div>
            )}
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
