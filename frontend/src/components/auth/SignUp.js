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

const SignUp = () => {
  return (
    <MDBContainer fluid className="d-flex flex-column justify-content-center">
      <MDBRow>
        <MDBCol md="12" className="mt-3 d-flex justify-content-center">
          <MDBCard className="" style={{ width: 500 }}>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign up</strong>
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
                label="Create Password"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              <MDBInput
                label="Comfirm Password"
                group
                type="password"
                validate
                containerClass="mb-0"
              />

              <div className="text-center mb-3">
                <Link to="/dashboard">
                  <MDBBtn
                    type="button"
                    gradient="sunny-morning"
                    rounded
                    className="btn-block z-depth-1a"
                    style={{ borderRadius: 30, color: "#fff" }}
                  >
                    Sign Up
                  </MDBBtn>
                </Link>
              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1"></MDBModalFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SignUp;
