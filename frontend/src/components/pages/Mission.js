import React from "react";
import { MDBRow, MDBCol, MDBMask, MDBView } from "mdbreact";
import Eagle from "../images/Eagle.png";
import "./css/Missions.css";

class Mission extends React.Component {
  constructor(props) {
    super(props);
    this.main = React.createRef();
  }
  render() {
    return (
      <div id="mission">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Our Mission
          <hr style={{ height: 5, width: 40, backgroundColor: "#000" }} />
        </h2>
        <MDBRow className="px-5 mx-0">
          <MDBCol lg="6" md="6">
            <MDBView
              className=" mb-lg-0"
              hover
              waves
              className="d-flex justify-content-center"
            >
              <img
                className="img-fluid z-depth-1 rounded"
                src={Eagle}
                alt="eagle.png"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="6" md="6" className=" pt-5">
            <p className="lead">
              African Internatiional Documentary Festival(AFIDF) presents an
              independent and inspiring meeting place and audiences and
              professionals to se a diverse and high-quality African Diaspora
              program. The diverse nature of the event applies to the form and
              content of the African documentary films as well as to the
              cultural backgrounds of the filmmakers. AFIDF also offers an
              alternative to African Diaspora mass entertainment and uniformity,
              comfirming that there is an increasing need in audience for
              African Diaspora high-quality films that delve deep and urge us to
              reflect.
            </p>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}
export default Mission;
