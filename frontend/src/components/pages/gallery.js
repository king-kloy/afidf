/* eslint-disable react/jsx-no-duplicate-props */
import React, { Component } from "react";
import { MDBRow, MDBCol, MDBMask, MDBView } from "mdbreact";
import africa from "../images/africa.jpg";
import CameraCrew from "../images/CameraCrew.png";
import drummerMan from "../images/DrummerMan.png";
import CameraWoman_Greyscale from "../images/CameraWoman_Grayscale.png";
import Drummers from "../images/Drummers.png";
import ColoredPalm from "../images/ColoredPalm.png";
import Smiling_Ladies from "../images/Smiling_Ladies.png";
import Trophies from "../images/Trophies.png";
import Multipics from "../images/multipics.png";

class gallery extends Component {
  render() {
    return (
      <div className="gallery">
        <div class="container">
          <MDBRow className="d-flex justify-content-center">
            <h3
              className="display-6 mt-3 mb-3 font-weight-bold text-center"
              style={{ fontSize: 40, border: 3, borderColor: "#fff" }}
            >
              Gallery
              <hr style={{ height: 5, width: 40, backgroundColor: "#000" }} />
            </h3>
          </MDBRow>
          <MDBRow class="row ">
            <MDBCol lg="4" md="6" className="pl-0 mr-3">
              <MDBRow>
                <MDBView
                  className=" mb-lg-0"
                  hover
                  waves
                  className="d-flex justify-content-center"
                >
                  <img
                    className="img-fluid z-depth-1 rounded"
                    src={africa}
                    alt="africa.png"
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBRow>
              <MDBRow className="row mt-2">
                <MDBView
                  className=" mb-lg-0"
                  hover
                  waves
                  className="d-flex justify-content-center"
                >
                  <img
                    className="img-fluid z-depth-1 rounded"
                    src={Trophies}
                    alt="africa.png"
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBRow>
              <MDBRow className="row mt-2">
                <MDBView
                  className=" mb-lg-0"
                  hover
                  waves
                  className="d-flex justify-content-center"
                >
                  <img
                    className="img-fluid z-depth-1 rounded"
                    src={Multipics}
                    alt="africa.png"
                    style={{ height: 63, width: 400 }}
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBRow>
            </MDBCol>
            <MDBCol lg="3" md="6" className="pl-1 mr-1">
              <MDBRow className="row">
                <MDBView
                  className=" mb-lg-0"
                  hover
                  waves
                  className="d-flex justify-content-center"
                >
                  <img
                    className="img-fluid z-depth-1 rounded"
                    src={CameraCrew}
                    alt="africa.png"
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBRow>
              <MDBRow className="row mt-2">
                <MDBView
                  className=" mb-lg-0"
                  hover
                  waves
                  className="d-flex justify-content-center"
                >
                  <img
                    className="img-fluid z-depth-1 rounded"
                    src={Smiling_Ladies}
                    alt="africa.png"
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBRow>
              <MDBRow className="row mt-2">
                <MDBView
                  className=" mb-lg-0"
                  hover
                  waves
                  className="d-flex justify-content-center"
                >
                  <img
                    className="img-fluid z-depth-1 rounded"
                    src={drummerMan}
                    alt="africa.png"
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBRow>
            </MDBCol>
            <MDBCol lg="4" md="6" className="">
              <MDBRow className="row">
                <MDBView hover waves className="d-flex justify-content-center">
                  <img
                    className="img-fluid z-depth-1 rounded"
                    src={Drummers}
                    alt="africa.png"
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBRow>
              <MDBRow className="row mt-2">
                <MDBView
                  className=" mb-lg-0"
                  hover
                  waves
                  className="d-flex justify-content-center"
                >
                  <img
                    className="img-fluid z-depth-1 rounded"
                    src={CameraWoman_Greyscale}
                    alt="africa.png"
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBRow>
              <MDBRow className="row mt-2">
                <MDBView
                  className=" mb-lg-0"
                  hover
                  waves
                  className="d-flex justify-content-center"
                >
                  <img
                    className="img-fluid z-depth-1 rounded"
                    src={ColoredPalm}
                    alt="africa.png"
                    style={{ height: 255, width: 400 }}
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </div>
      </div>
    );
  }
}

export default gallery;
