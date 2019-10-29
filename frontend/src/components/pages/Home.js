import React, {Component} from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from 'mdbreact'
import './css/home.css'
import Mission from './Mission'
import Vision from './Vision'
import Values from './Values'
import ContactUs from './ContactUs'

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
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                alt="First slide"
              />
           <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Light mask</h3>
            <p>First text</p>
          </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100 fullview"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Strong mask</h3>
            <p>Second text</p>
          </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
            <img
              className="d-block w-100 fullview"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Slight Mast</h3>
            <p>Third text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>

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