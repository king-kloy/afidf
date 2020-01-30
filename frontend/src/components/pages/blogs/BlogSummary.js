import React from 'react'
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import { Link } from 'react-router-dom'
import moment from 'moment'
import Smiling_Ladies from '../../images/Smiling_Ladies.png'

const BlogSummary = ({post}) => {
    return (
        <div className="">
            <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <p className="text-center w-responsive mx-auto mb-5">
        </p>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src={Smiling_Ladies}
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
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>{post.title}</strong>
            </h3>
            <p>
              {post.content}
            </p>
            <p>
              by
              <a href="#!">
                <strong>{post.authorFirstName} {post.authorLastName} </strong>
              </a>
              , {moment(post.createdAt.toDate()).calendar()}
            </p>
            <Link to='/BlogDetails'>
                <MDBBtn color="success" size="md" className="waves-light ">
                Read more
                </MDBBtn>
            </Link>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
      </div>
    )
}

export default BlogSummary;