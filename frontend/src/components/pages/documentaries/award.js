import React from "react";
import Trophies from "../../images/Trophies.png";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "../css/award.css";

const award = () => {
  return (
    <div className="awards">
      <MDBContainer fluid>
        <MDBRow>
          <img
            src={Trophies}
            className="w-100"
            alt="Trophies"
            style={{ height: 600, objectFit: "fill" }}
          />
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
            <br /> AFIDF Competition for Student Documentary# items Competition
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
            className="mt-3 mb-0"
            style={{ width: 2000, backgroundColor: "#cbd3cd" }}
          />
        </MDBRow>
        <MDBRow
          className="d-flex justify-content-center"
          style={{ backgroundColor: "#e8c060" }}
        >
          <h5 className="h2-responsive font-weight-bold text-center mb-3 pt-3">
            Awards Categories
            <hr style={{ height: 5, width: 40, backgroundColor: "#000" }} />
          </h5>
        </MDBRow>
        <MDBRow style={{ backgroundColor: "#e8c060" }}>
          <MDBCol md="6" className="p-3">
            <h5 className="font-weight-bold">AFIDF PRO Audience Award</h5>
            <p className="font-weight-bold">
              All competition documentary films and films compete for the AFIDF
              PRO Audience Award, worth cash prizes. During the festival, you
              can keep track of the audience score in real-time on our homepage
              via the daily Top 10 section, as well as under the festival menu.
              The announcement of the winner will take place on the last day of
              the festival during a AFIDF PRO TV recording in the —theater.
              After the presentation, the winning film will be screened. Access
              to the ﬁlm is only possible after attending the TV recording.
              <br />
              Friday, November—theatre
              <br />
              Made possible by AFIDF PRO
              <br />
              Tickets for awa rd ceremony 8L screening
            </p>
          </MDBCol>
          <MDBCol md="6" className="p-3">
            <h5 className="font-weight-bold">
              AFRICAN DIASPORA HUMAN RIGHTS AWARD
            </h5>
            <p className="font-weight-bold">
              For the first time in 2020, AFIDF will introduce the African
              Diaspora Human Rights Award—a prestigious international
              documentary prize from the African Union —will be presented at
              AFIDF , to the documentary which best represents the theme of
              human rights. The winning film will receive a cash prize (to be
              shared by the director(s) and main producer).
              <br />
              On Tuesday, November 20, 2020 Universal Children's Day, these
              films will be screened, usually followed by a discussion with the
              directors.
              <br />
              Tuesday, November 20, 2020 from Los Angeles to various theaters in
              New York and Chicago.
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow style={{ backgroundColor: "#e8c060" }} className="p-3">
          <MDBCol md="6" className="">
            <h5 className="font-weight-bold ">
              AFRICAN DIASPORA CULTURE REWARDS
            </h5>
            <p className="font-weight-bold">
              A documentary talent with a financial contribution of cash prize,
              with which the filmmaker gets the opportunity to make a film about
              a subject of his or her choosing. The stipend is intended for
              documentary makers who have already proven their quality in
              practice, and have already received some recognition for their
              work. The Documentary Stipend is awarded during the festival.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="font-weight-bold ">
              NYANXFILM DocLab Interactive Grant
            </h5>
            <p className="font-weight-bold">
              The NYANXFILM DocLab Interactive Grant Film is a cash prize for
              the development of interactive projects on African soil. The
              conditions are that the projects focus on collective experience,
              and contain an element of research. The winning projects will be
              been selected from the AFIDF DocLab 2019 selection, media program.
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="p-3" style={{ backgroundColor: "#e8c060" }}>
          <MDBCol md="6">
            <h5 className="font-weight-bold ">NYANXFILM Talent Award</h5>
            <p className="font-weight-bold">
              On Thursday, November 15 the NYANXFILM Talent
              <br />
              During the AFIDFAcademy workshop, six emerging documentary talents
              work for a number of months on the development and elaboration ofa
              documentary idea under the guidance of renowned documentary
              makers. The winner receives a cash prize from the NYANXFILM fund
              for the development of a trailer, allowing the winner the
              opportunity to further develop his or her plan in collaboration
              with a producer and one of the broadcasters. The winner can then
              submit an application to the NYANXFILM for a contribution to the
              realization of the project.
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="5" className="mt-5">
            <p className="font-weight-bold ">
              Below is the document that entails the entry rules and
              regulations.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default award;
