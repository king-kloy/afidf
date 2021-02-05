import React from "react";
import Smiling_Ladies from "../images/Smiling_Ladies.png";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./css/Documentaries.css";

class Documentaries extends React.Component {
  render() {
    return (
      <div className="documentaries">
        <MDBContainer fluid>
          <MDBRow className="fluid">
            <img
              className="d-block w-100 h-auto fullview"
              src={Smiling_Ladies}
              alt="Smiling ladies"
            />
          </MDBRow>
          <MDBRow className="d-flex justify-content-center">
            <h2 className="h1-responsive font-weight-bold text-center my-5 pt-5">
              Introduction
              <hr style={{ height: 5, width: 40, backgroundColor: "#000" }} />
            </h2>
          </MDBRow>
          <MDBRow className>
            <MDBCol md="6" className="lead font-weight-bold">
              The African International Documentary Festival (AFIDF) is an
              Intercontinental gateway and platform for all majoring in African
              Diaspora Documentary Studies and those seeking an understanding of
              its infinite forms. <br />
              <br />
              It is also an excellent opportunity for all African Diaspora
              documentarians to obtain a general introduction to the theoretical
              and practical approaches to documentary work in radio/audio,
              video/film, hypermedia/multimedia, photography, and long-form
              nonfiction writing. <br />
              <br />
              The AFIDF festival will cover both the history and rudimentary
              skills involved in the production of each documentary mode,
              placing a strong emphasis on linking the research methods of the
              social sciences and the humanistic concerns of the arts, media
              archives and archival
            </MDBCol>
            <MDBCol md="6" className="lead font-weight-bold">
              research, ethical and legal issues associated with documentary
              research and production, the history and theory of documentary
              photography, film, radio, long-form non-fiction prose and
              documentary editing—as well as the newest documentary genre,
              hypermedia.
              <br />
              <br />
              Africa/Diaspora nonfiction research-base films, radio programs,
              hypermedia presentations, photographs, and long—form analytical
              narratives shed light on the world of Africa/African Dia. <br />
              <br /> They portray real people, events, and situations--but with
              an aesthetic sensibility that transforms these depictions into
              compelling statements about all aspects of our social, cultural,
              political, and economic lives.
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer fluid className="focus mt-5">
          <MDBRow>
            <h3 className="font-weight-bold text-white main d-flex justify-content-center">
              AFIDF &nbsp;<p className="special mb-0">focal point</p>
            </h3>
          </MDBRow>
          <MDBRow className="mt-3">
            <MDBCol md="6" className="lead text-white p-3">
              AFIDF focuses on talent, new media and African Diaspora cultural
              diversity. These focal points are implemented over the entire
              breadth of the AFIDF event: not only in the festival programming,
              but also in the aforementioned activities for African Diaspora
              film professionals. They are key in furtherdeveloping the genre,
              guaranteeing the multiformity of the African Diaspora documentary
              landscape, offering audiences and professionals varied stories and
              perspectives that lead to high-quality reflection on Africa and
              her people in the diaspora solidifying AFIDF's own special
              position.
            </MDBCol>
            <MDBCol md="6">
              <h5
                className="font-weight-bold mt-3"
                style={{ color: "#ffb302" }}
              >
                FOCUS PROGRAMS
              </h5>
              <p className="lead text-white ">
                Explore the AFIDF 2020 focus programs Me, Space, and Serialized.
                The year 2020 AFIDF introduces the thematic focus programs, Me,
                Space, and Serialized. Whether examining personal histories of
                the filmmaker, exploring the use of physical space in
                documentaries, or investigating new serial formats, these
                selections tackle complex questions through a combination of new
                films and classics.
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="6" className="mt-3 p-3">
              <h5 className="font-weight-bold " style={{ color: "#ffb302" }}>
                ME 25 ITEMS
              </h5>
              <p className="lead text-white">
                AFIDF presents a main focus program, Me, about the personal and
                autobiographical documentary film. Me is a selection of
                different cinematic expressions by filmmakers whose study of
                themselves is both a journey into their own private history as
                well as an artistic exploration. The program consists of around
                20 documentaries, both classics and premieres, from different
                regions of Africa and the diaspora, made by both a new
                generation of filmmakers as well as established auteurs. Many of
                the filmmakers will be discussing their films at the festival.
              </p>
            </MDBCol>
            <MDBCol md="6">
              <MDBRow className="pt-0">
                <h5
                  className="font-weight-bold ml-5"
                  style={{ color: "#ffb302" }}
                >
                  SPACE 10 ITEMS
                </h5>
                <p className="lead text-white p-3">
                  In AFIDF's long-running series about the art of documentary
                  filmmaking, the year 2020 focus will be on the use ofspace in
                  film. Atotal often new films will be selected for this
                  program, in which space plays a crucial role in many different
                  ways and on different levels. After the films, hosts will
                  interview the directors about their use of space.
                </p>
              </MDBRow>
              <MDBRow>
                <h5
                  className="font-weight-bold text-center ml-5"
                  style={{ color: "#ffb302" }}
                >
                  SERIALIZED 5 ITEMS
                </h5>
                <p className="lead text-white p-3">
                  AFIDF's focus program Serialized experiments with the format
                  of documentary series within a festival setting. We present
                  five series, both web documentaries and lineardocumentaries
                </p>
              </MDBRow>
            </MDBCol>
          </MDBRow>
          <div className="focal-points container-fluid"></div>
        </MDBContainer>
      </div>
    );
  }
}

export default Documentaries;
