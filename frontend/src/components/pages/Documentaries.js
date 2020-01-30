import React from 'react'
import Smiling_Ladies from '../images/Smiling_Ladies.png'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';


class Documentaries extends React.Component {
    render(){
        return(
            <div className='Documentaries'>
                <MDBContainer fluid>
                    <MDBRow className ="fluid">
                       <img className="d-block w-100 fullview" src={Smiling_Ladies}/>
                    </MDBRow>
                    <MDBRow className='d-flex justify-content-center'>
                            <h2 className="h1-responsive font-weight-bold text-center my-5 pt-5">
                            African Diaspora Renaissance Creative Documentaries
                                <hr style={{height: 5, width: 40, backgroundColor: '#000'}} />
                            </h2>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol className='lead'>The renaissance creative documentary is AFIDF's point of
                                    documentarians and film 1makers observation. These are
                                    documentaries that are visually striking and express the story
                                    writers/filmmaker's vision. The documentarians make artistic
                                    choices in the use of cinematic means (image, sound and editing)
                                    to convey his or her vision on the subject matter and tell the story.
                                    This artistic demand is the festival's most crucial selection
                                    criterion originality, expressiveness and cultural and/or historical
                                    value play an important role as well.
                                African Diaspora Renaissance Creative documentaries will also
                                offer new insights into the African Diaspora cultural society—they
                                open our eyes and stimulate our critical thinking power. AFIDF
                                strives to screen ﬁlms with urgent African Diaspora social themes
                                that reflect the spirit of the time in which they are made. They do
                                not reiterate the reality of yesterday or today's African Diaspora,
                                as this is thejob ofthe news media. News can break us down when
                                it's about Africa and her stories, but background stories do the
                                opposite. They offer nuance and provide insight, making
                                reflection on past and current events possible. AFIDF considers
                                this kind of social function to be crucial in its evaluation of '
                                documentary submissions.
                                Finally, AFIDF searches for African Diaspora documentaries that
                                touches and moves the viewer. The power of a great documentary
                                is when it succeeds in touching its viewers and getting them to
                                feel uncomfortable, softening us up or making us laugh with its
                                striking storylines. AFIDF strives to be an accessible African
                                Diaspora festival, to reach people of all walks of life and function
                                as a true African Diaspora experience for as diverse an audience as
                                possible</MDBCol>
                    </MDBRow>
                    <MDBRow>
                    </MDBRow>
                </MDBContainer>



            </div>
        )
    }
}

export default Documentaries;