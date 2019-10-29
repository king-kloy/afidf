import React from 'react';
import {  MDBRow, MDBCol, MDBMask,MDBView } from "mdbreact";
import africa from '../images/africa.jpg';
import './css/Missions.css' ;

const Mission = () => {
    return (
         <div>
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Our Mission
             <hr style={{height: 5, width: 40, backgroundColor: '#000'}} />
          </h2>
          <MDBRow className='px-5 mx-0'>
            <MDBCol lg="6">
              <MDBView className=" mb-lg-0 mb-4" hover waves>
                <img
                  className="img-fluid z-depth-3 rounded"
                  src={africa}
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol lg="6" className="justifyy">
              <p>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repellendus et aut
                officiis debitis.
              </p>
            </MDBCol>
          </MDBRow>
          </div>  
    )
}

export default Mission;