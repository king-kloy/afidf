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
                </MDBContainer>


                
            </div>
        )
    }
}

export default Documentaries;