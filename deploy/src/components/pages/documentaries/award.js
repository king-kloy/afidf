import React from "react";
import Trophies from "../../images/Trophies.png";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import "../css/award.css";

const award = () => {
  return (
    <div className="awards">
      <MDBContainer fluid>
        <MDBRow>
          <img src={Trophies} className="w-100 main" alt="Trophies" />
        </MDBRow>
        <MDBRow className="d-flex justify-content-center">
          <h4 className="h2-responsive font-weight-bold text-center my-3 pt-3">
            Awards
            <hr style={{ height: 5, width: 40, backgroundColor: "#000" }} />
          </h4>
        </MDBRow>
        <MDBRow className="">
          <MDBCol md="6" className="font-weight-bold">
            AFIDF Competition for Feature-Length Documentary #items AFIDF's
            feature-length competition from established African Diaspora
            documentary filmmakers. From intense visual experiences to intimate
            portraits, a great diversity of style and form typifies the festival
            selection.
            <br />
            <br /> AFIDF Competition for First Appearance - #items A strong
            selection of films from emerging African Diaspora documentary
            filmmakers, who gave it their all for their debut film.
            <br />
            <br /> AFIDF Competition for Mid-Length Documentary# items
            Mid-Length Documentary to carve out a new space for imagination.
            <br />
            <br />
            AFIDF DocLab Competition for Digital Storytelling #items Web
            documentaries, multimedia photography, audio walks, virtual reality,
            games, and augmented reality.
            <br />
            <br /> AFIDF DocLab Competition for Immersive Non-Fiction #items The
            DocLab Competition for Immersive Non-Fiction.
            <br />
            <br /> AFIDF Competition for Continental African Documentary #items
            The competition consists of films by well-known and often
            award-winning African filmmakers, but also by promising new talent.
          </MDBCol>
          <MDBCol md="6" className="font-weight-bold">
            AFIDF Competition for Diaspora African Documentary# items The
            competition consists of films by well-known and often award-winning
            Diaspora African filmmakers, but also by promising new talent.
            <br />
            <br /> AFIDFCompetition for Student Documentary# items Competition
            for Student Documentary filmmakers of the future with a fresh view
            of the African Diaspora world, and searching for a cinematographic
            signature. In this edition, the next generation looking emphatically
            across borders of the African continent, and strives for authorship.
            <br />
            <br />
            AFIDF Competition for Short Documentary Films that reflect aesthetic
            exploration and bold cultural approach.
            <br />
            <br /> AFIDF Competition for Kids 8L Docs <br />
            <br />
            Elevating the form, content, and future of Africa's youth
            documentary <br />
            <br />
            In addition to the competition program, five other awards will be
            presented during AFIDF.
          </MDBCol>
          <hr
            className="mt-3"
            style={{ width: 2000, backgroundColor: "#cbd3cd" }}
          />
        </MDBRow>
        <MDBRow className="d-flex justify-content-center">
          <h5 className="h2-responsive font-weight-bold text-center mb-3 pt-3">
            Awards Categories
            <hr style={{ height: 5, width: 40, backgroundColor: "#000" }} />
          </h5>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default award;
