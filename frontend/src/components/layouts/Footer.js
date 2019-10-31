import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter  className="font-small pt-4 mt-4" style={{backgroundColor: '#b6974e'}}>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="p-5">
        <MDBCol md="4">
            <h5 className="title ml-5 font-weight-bold d-flex justify-content-sm-center" style={{ width: 40}}>Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Mission</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Vision</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Documentaries</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Awards</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="8">
            <h5 className="title font-weight-bold">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
        <ul className="list-unstyled list-inline text-center float-left">
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
          <li className="list-inline-item">
            <a className="btn-floating btn-dribbble mx-1">
              <i className="fab fa-dribbble"> </i>
            </a>
          </li>
        </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3" style={{backgroundColor: '#101818'}}>
        <MDBContainer color='unique-color-dark' fluid>
          &copy; {new Date().getFullYear()} Copyright: Benefo & Kyei
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;