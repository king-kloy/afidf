import React from "react";
import CameraCrew from "../../images/CameraCrew.png";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "../css/Documentaries.css";

const submission = () => {
  return (
    <div className="submission">
      <MDBContainer fluid>
        <MDBRow className="fluid">
          <img
            className="d-block w-100 h-auto fullview"
            src={CameraCrew}
            alt="Cameracrew"
          />
        </MDBRow>
      </MDBContainer>
      <MDBContainer>
        <MDBRow className="d-flex justify-content-center submission">
          <MDBCol md="5" className="text-center mt-4">
            <h3 className="submit">Submit to</h3>
            <h2 className="font-weight-bold">AFIDF LOS ANGELES 2020</h2>
            <p>
              Submissions for AFIDF Los Angeles 2020 documentary films and
              interactive/immersive projects to be considered for the 1st
              edition of AFIDF, taking place November 20th to 23rd, 2020.
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-5">
          <MDBCol>
            <h5 className="font-weight-bold">SUBMISSION DEADLINES</h5>
            <p>
              Our two submission deadlines are: <br />
              <ul>
                <li>May25th. 2020—for all films and projects</li>
                <li>August1st, 2019—for all films and projects </li>
              </ul>
              We encourage you to submit your work as soon as it is completed.
              <br />
              <br />
              <p className="font-weight-bold">
                Please read the regulations carefully before submitting your
                documentary film or interactive/immersive project. For any
                questions about submitting your work, take a look at our AFIDF
                submission FAQs and DocLab submission FAQs, or get in touch with
                us. The online entry forms are available through MyAFIDF in the
                section 'My Entries'.
              </p>
              <br />
              <p className="font-weight-bold mb-0">
                What's special in AFIDF program sect-ions?
              </p>
              <p>
                The year 2020, we are pleased to announce that the program
                sections Frontlight, Luminous, Best of Fests, Masters, and
                Paradocs are open to films of any duration, including short
                films. The AFIDF Competition for Short Documen-tary will only
                accept Africa, world and international premieres. This program
                section is included in our entry form and will be officially
                open for submissions. Finally, the AFIDF award structure will be
                further developed in 2020. We look forward to sharing the
                details of these developments with you soon.
              </p>
              <p className="font-weight-bold mb-0">
                Updates to the submission process
              </p>
              <p>
                To help facilitate the submission process, there are now
                separate entry forms for AFIDF and AFIDF DocLab. Likewise, you
                will find separate FAQ pages for submitting films and submitting
                interactive/immersive projects.
              </p>
              <p className="font-weight-bold mb-0">Accessibility</p>
              As part of our ongoing commitment to delivering an inclusive
              festival experience, we are working to remove several access
              barriers in our programming for the year 2020, If your film is
              selected, we encourage you to provide more accessible film formats
              when possible. We will contact you about whether you have a
              version available with full English subtitles, Closed Captioning
              and/or Descriptive Sound. For more information, please see our
              accessibility page. <br />
              <b>Closed Captioned (CC)</b>: Display of text on a screen to
              provide additional or interpretive information.
              <br />
              <b>Descriptive Sound (DS)</b>: A digitally compatible described
              narration system for the blind and visually impaired with
              headphones.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default submission;
