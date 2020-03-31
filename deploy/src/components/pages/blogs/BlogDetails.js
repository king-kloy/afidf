import React from "react";
import moment from "moment";
import { useStore } from "easy-peasy";

const BlogDetails = props => {
  const post = useStore(state => state.posts);
  return (
    <div className="Details">
      <div className="container">
        <div className="col-md-8">
          <div className="card card-default">
            <div className="card-heading">
              <h5 className="card-title">{post.title}</h5>
            </div>
            <div className="card-body">
              <p>{post.content}</p>
              <div className="text-grey">
                <div>
                  Posted by {post.authorFirstName} {post.authorLastName}
                </div>
                <p className="text-grey">{post.createdAt}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
