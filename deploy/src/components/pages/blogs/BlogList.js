import React, { useState } from "react";
import { useStore } from "easy-peasy";
import BlogSummary from "./BlogSummary";
import { Link } from "react-router-dom";

const BlogList = () => {
  //  const posts = Array.from();
  const posts = useStore(state => state.posts).getState().posts;

  //  console.log(typeof posts);
  //  console.log(posts[0]);

  // const posts = useState({
  //     posts: [
  //         {
  //             title: 'House Party',
  //             content: ' blah blah blah',
  //            authorFirstName: 'Yaw ',
  //            authorLastName: 'Boahene',
  //            createdAt: '3rd September 2020',
  //         },
  //         {
  //             title: 'Sing Song',
  //             content: 'blah blah blah',
  //             authorFirstName: 'Alfred',
  //             authorLastName: 'Benefo',
  //             createdAt: '4rd October, 2020'
  //         },
  //     ]
  // })
  return (
    <div className="BlogList-section container">
      <div className="row">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Recent posts
        </h2>
      </div>

      {posts.map((post, index) => (
        <Link to={"/post/" + post.id} key={post.id}>
          <BlogSummary post={post} key={index} index={index} />
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
