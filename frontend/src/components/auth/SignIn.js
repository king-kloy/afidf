import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBModalFooter,
} from "mdbreact";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <MDBContainer
      fluid
      className=" d-flex flex-column justify-content-center mb-3"
    >
      <MDBRow className>
        <MDBCol md="12" className="pt-0 d-flex justify-content-center">
          <MDBCard className=" mt-3" style={{ width: 500 }}>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign in</strong>
                </h3>
              </div>
              <MDBInput
                label="Your email"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your password"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              <p className="font-small blue-text d-flex justify-content-end pb-3">
                Forgot
                <a href="#!" className="blue-text ml-1">
                  Password?
                </a>
              </p>
              <div className="text-center mb-3">
                <Link to="/dashboard">
                  <MDBBtn
                    type="button"
                    gradient="sunny-morning"
                    rounded
                    className="btn-block z-depth-1a"
                    style={{ borderRadius: 30, color: "#fff" }}
                  >
                    Sign in
                  </MDBBtn>
                </Link>
              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                <Link to="/signup">
                  <a href="/signin" className="blue-text ml-1">
                    Sign Up
                  </a>
                </Link>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SignIn;
