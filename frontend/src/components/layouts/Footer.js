/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter
      className="font-small pt-3"
      style={{ backgroundColor: "#b6974e" }}
    >
      <MDBContainer fluid>
        <MDBRow className="p-5">
          <MDBCol md="4">
            <h5 className="font-weight-bold text-center pl-5">
              Links
              <hr
                style={{
                  height: 2,
                  width: 40,
                  backgroundColor: "#fff",
                }}
              />
            </h5>
            <ul className="text-center">
              <li className="list-unstyled">
                <a href="/">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="/gallery">Gallery</a>
              </li>
              <li className="list-unstyled">
                <a href="/documentaries">Documentaries</a>
              </li>
              <li className="list-unstyled">
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="4" className=" text-center">
            <h5 className="title font-weight-bold">
              Africa International Documentary Festival
            </h5>
            <p>
              AFIDF will set the standard and be the recognized leader in
              African Diaspora documentary information management practice,
              education, certification, research, and advocacy.
            </p>
            <ul className="list-unstyled list-inline text-center ">
              <li className="list-inline-item">
                <a className="btn-floating btn-fb mx-1">
                  <i className="fab fa-facebook-f"> </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn-floating btn-tw mx-1">
                  <i className="fab fa-twitter"> </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn-floating btn-gplus mx-1">
                  <i className="fab fa-google-plus-g"> </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn-floating btn-li mx-1">
                  <i className="fab fa-linkedin-in"> </i>
                </a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="4" className="text-center">
            <h6 className="text-uppercase  font-weight-bold text-center ">
              Contact
              <hr style={{ height: 2, width: 40, backgroundColor: "#fff" }} />
            </h6>

            <p>
              <i className="fas fa-home mr-3"></i> North Hills, CA 91343, US
            </p>
            <p>
              <i className="fas fa-envelope mr-3"></i> atonyankom@gmail.com
            </p>
            <p>
              <i className="fas fa-phone mr-3"></i> + 83 278 513 42
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div
        className="footer-copyright text-center py-3"
        style={{ backgroundColor: "#1C2331" }}
      >
        <MDBContainer color="unique-color-dark" fluid>
          &copy; {new Date().getFullYear()} Copyright: AFIDF
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
