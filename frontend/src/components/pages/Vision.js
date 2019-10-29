import React from 'react';
import {  MDBRow, MDBCol, MDBMask, MDBView } from "mdbreact";
import africa from '../images/africa.jpg'


const Vision = () => {
    return (
      <div style={{backgroundColor: '#e8c060'}}>
      <h2 className="h1-responsive font-weight-bold text-center my-5 pt-5">
        Our Vision  
         <hr style={{height: 5, width: 40, backgroundColor: '#000'}} />          
      </h2>     
      <MDBRow className='px-5 mx-0 pb-5'>
        <MDBCol lg="6" className='d-flex justify-content-center'>
          <p>
            AFIDF will set the standard and be the recognized leader in African Diapora documentary informaation management pratice,
            education, certification, research, and advocacy.
          </p>
        </MDBCol>
        <MDBCol lg="6">
          <MDBView className="rounded  mb-lg-0 mb-4" hover waves>
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
      </MDBRow>
      </div>
        

    )
}

export default Vision;