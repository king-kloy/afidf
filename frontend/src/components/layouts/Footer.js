import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter  className="font-small pt-4 mt-4" style={{backgroundColor: '#b6974e'}}>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="p-5">
        <MDBCol md="4">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="8">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
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