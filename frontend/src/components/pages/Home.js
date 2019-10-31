import React, {Component} from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from 'mdbreact'
import './css/home.css'
import Mission from './Mission'
import Vision from './Vision'
import Values from './Values'
import ContactUs from './ContactUs'
import Drummers from  '../images/Drummers.png'
import Smiling_Ladies from '../images/Smiling_Ladies.png'
import CameraCrew from '../images/CameraCrew.png'

class Home extends Component {
  state = {

   }
  render() {
    return (
        <div className='homePage'>
            {/* <div className="showcase" class="show" ></div> */}
            {/* Carousel Begins */}
            <MDBContainer  fluid style={{padding: 0,}}>
                <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
              >
          <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100 fullview"
                src={Drummers}
                alt="First slide"
              />
           <MDBMask overlay="black-light" />
          </MDBView>
          {/* <MDBCarouselCaption>
            <h3 className="h3-responsive">Light mask</h3>
            <p>First text</p>
          </MDBCarouselCaption> */}
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100 fullview"
              src={Smiling_Ladies}
              alt="Second slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          {/* <MDBCarouselCaption>
            <h3 className="h3-responsive">Strong mask</h3>
            <p>Second text</p>
          </MDBCarouselCaption> */}
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
            <img
              className="d-block w-100 fullview"
              src={CameraCrew}
              alt="Third slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          {/* <MDBCarouselCaption>
            <h3 className="h3-responsive">Slight Mast</h3>
            <p>Third text</p>
          </MDBCarouselCaption> */}
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

        {/* Documentaries Section */}

         {/* Contact Us Section */}
         <ContactUs />
        </div>
     )
  }
}
export default Home;