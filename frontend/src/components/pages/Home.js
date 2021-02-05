import React, { Component } from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from "mdbreact";
import "./css/home.css";
import Mission from "./Mission";
import Vision from "./Vision";
import Values from "./Values";
import ContactUs from "./ContactUs";
import Drummers from "../images/Drummers.png";
import Smiling_Ladies from "../images/Smiling_Ladies.png";
import CameraCrew from "../images/CameraCrew.png";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="homePage">
        {/* Carousel Begins */}
        <MDBContainer fluid style={{ padding: 0 }}>
          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={true}
            className="z-depth-0"
            style={{ marginTop: 0, paddingTop: 0 }}
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img
                    className="d-block w-100 h-auto fullview"
                    src={Drummers}
                    alt="First slide"
                  />
                  <MDBMask overlay="black-light" />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    className="d-block w-100 h-auto fullview"
                    src={Smiling_Ladies}
                    alt="Second slide"
                  />
                  <MDBMask overlay="black-light" />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img
                    className="d-block w-100 h-auto fullview"
                    src={CameraCrew}
                    alt="Third slide"
                  />
                  <MDBMask overlay="black-light" />
                </MDBView>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>

        {/* Values Section Starts */}
        <Values />

        {/* Mission Section Starts*/}
        <Mission />

        {/* Vision Section  */}
        <Vision />

        {/* Contact Us Section */}
        <ContactUs />
      </div>
    );
  }
}
export default Home;
