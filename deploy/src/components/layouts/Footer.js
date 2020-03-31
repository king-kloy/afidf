import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter
      className="font-small pt-3 mt-4"
      style={{ backgroundColor: "#b6974e" }}
    >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="p-5">
          <MDBCol md="4">
            <MDBRow className="d-flex justify-content-center">
              <h5 className="font-weight-bold" style={{ width: 40 }}>
                Links
              </h5>
              <hr style={{ height: 2, width: 40, backgroundColor: "#fff" }} />
            </MDBRow>
            <MDBRow className="d-flex justify-content-center">
              <ul>
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
            </MDBRow>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title font-weight-bold">
              Africa International Documentary Festival
            </h5>
            <p>
              AFIDF will set the standard and be the recognized leader in
              African Diapora documentary informaation management pratice,
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
          <MDBCol md="4">
            <h6 className="text-uppercase font-weight-bold">Contact</h6>
            <hr style={{ height: 2, width: 40, backgroundColor: "#fff" }} />

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
          &copy; {new Date().getFullYear()} Copyright: Benefo & Kyei
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
