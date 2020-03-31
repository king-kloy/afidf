import React, { useEffect, useState } from 'react';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";

const Blogpost = (props) => {
    const [post, setPost] = useState({
        id: "",
        blogCategory: "",
        blogTitle: "",
        postedOn: "",
        author: "",
        blogImage: "",
        blogText: ""
    })


const [postId, setPostId] = useState('');

useEffect ( () => {
    const postId = props.match.params.postId;
    const post = Blogpost.data.find(post => post.id === postId);
    setPost(post);
    setPostId(postId);
}, [post, props.match.params.postId]);

    return (
        <div className="BlogpostContainer">
             <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Recent posts
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
        </p>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src={require("https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg" + post.blogImage)}
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="green-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="utensils" className="pr-2" />
                {post.blogCategory}
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>{post.blogTitle}</strong>
            </h3>
            <p>
              {post.blogText}
            </p>
            <p>
              by
              <a href="#!">
                <strong>{post.author}</strong>
              </a>
              , {post.postedOn}
            </p>
            <MDBBtn color="success" size="md" className="waves-light ">
              Read more
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
        </div>
    )
};