import React from "react";
import hut from "../images/hut.svg";
import "./css/Value.css";

const Values = () => {
  return (
    <div className="row bg-images">
      <h2 className=" col-12 h1-responsive font-weight-bold text-center pt-4">
        Our Values
        <hr style={{ height: 5, width: 40, backgroundColor: "#000" }} />
      </h2>
      <div className="col-lg-4 col-md-6 pt-0 pl-5 mt-0">
        <img src={hut} style={{ marginTop: 40 }} alt="" />
      </div>

      {/* the values ankasa */}

      <div className="col-lg-4 col-md-3 pt-0">
        <div className="row accordion d-flex justify-content-end p-0">
          <div className="col-md-10 col-xl-6 py-5">
            <div
              className="accordion md-accordion accordion-2"
              id="accordionEx7"
              role="tablist"
              aria-multiselectable="true"
            >
              <div className="card">
                <div
                  className="card-header z-depth-1 mb-1"
                  role="tab"
                  id="heading1"
                >
                  <a
                    data-toggle="collapse"
                    data-parent="#accordionEx7"
                    href="#collapse1"
                    aria-expanded="true"
                    aria-controls="collapse1"
                  >
                    <h5 className="mb-0 white-text font-thin">
                      Discovery<i className="fas fa-angle-down rotate-icon"></i>
                    </h5>
                  </a>
                </div>
                <div
                  id="collapse1"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="heading1"
                  data-parent="#accordionEx7"
                >
                  <div className="card-body mb-1 unique-color-dark white-text">
                    <p>Explore and bring to light new knowledge and ideas</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div
                  className="card-header z-depth-1 mb-1"
                  role="tab"
                  id="heading2"
                >
                  <a
                    className="collapsed"
                    data-toggle="collapse"
                    data-parent="#accordionEx7"
                    href="#collapse2"
                    aria-expanded="false"
                    aria-controls="collapse2"
                  >
                    <h5 className="mb-0 white-text font-thin">
                      Creativity{" "}
                      <i className="fas fa-angle-down rotate-icon"></i>
                    </h5>
                  </a>
                </div>
                <div
                  id="collapse2"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="heading2"
                  data-parent="#accordionEx7"
                >
                  <div className="card-body mb-1 unique-color-dark white-text">
                    <p>Instill our work with imagination and inovation.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div
                  className="card-header z-depth-1 mb-1"
                  role="tab"
                  id="heading3"
                >
                  <a
                    className="collapsed"
                    data-toggle="collapse"
                    data-parent="#accordionEx7"
                    href="#collapse3"
                    aria-expanded="false"
                    aria-controls="collapse3"
                  >
                    <h5 className="mb-0 white-text font-thin">
                      Excellence
                      <i className="fas fa-angle-down rotate-icon"></i>
                    </h5>
                  </a>
                </div>
                <div
                  id="collapse3"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="heading3"
                  data-parent="#accordionEx7"
                >
                  <div className="card-body mb-1 unique-color-dark white-text">
                    <p>
                      Deliver the highest-quality African Diaspora
                      documentaries.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div
                  className="card-header z-depth-1 mb-1"
                  role="tab"
                  id="heading4"
                >
                  <a
                    data-toggle="collapse"
                    data-parent="#accordionEx7"
                    href="#collapse4"
                    aria-expanded="true"
                    aria-controls="collapse1"
                  >
                    <h5 className="mb-0 white-text font-thin">
                      Diversity<i className="fas fa-angle-down rotate-icon"></i>
                    </h5>
                  </a>
                </div>
                <div
                  id="collapse4"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="heading4"
                  data-parent="#accordionEx7"
                >
                  <div className="card-body mb-1 unique-color-dark white-text">
                    <p>
                      Captilize on the cultural richness inherit in differences
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div
                  className="card-header z-depth-1 mb-1"
                  role="tab"
                  id="heading5"
                >
                  <a
                    data-toggle="collapse"
                    data-parent="#accordionEx7"
                    href="#collapse5"
                    aria-expanded="true"
                    aria-controls="collapse1"
                  >
                    <h5 className="mb-0 white-text font-thin">
                      Integrity<i className="fas fa-angle-down rotate-icon"></i>
                    </h5>
                  </a>
                </div>
                <div
                  id="collapse5"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="heading5"
                  data-parent="#accordionEx7"
                >
                  <div className="card-body mb-1 unique-color-dark white-text">
                    <p>
                      Carry out all our work with the greatest responsibility
                      and accountability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second batch of values */}

      <div className="col-lg-4 col-md-3 pt-0">
        <div className="row accordion d-flex justify-content-left p-0">
          <div className="col-md-10 col-xl-6 py-5">
            <div
              className="accordion md-accordion accordion-2"
              id="accordionEx7"
              role="tablist"
              aria-multiselectable="true"
            >
              <div className="card">
                <div
                  className="card-header z-depth-1 mb-1"
                  role="tab"
                  id="heading6"
                >
                  <a
                    data-toggle="collapse"
                    data-parent="#accordionEx7"
                    href="#collapse6"
                    aria-expanded="true"
                    aria-controls="collapse6"
                  >
                    <h5 className="mb-0 white-text font-thin">
                      Service<i className="fas fa-angle-down rotate-icon"></i>
                    </h5>
                  </a>
                </div>
                <div
                  id="collapse6"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="heading6"
                  data-parent="#accordionEx7"
                >
                  <div className="card-body mb-1 unique-color-dark white-text">
                    <p>Explore and bring to light new knowledge and ideas</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div
                  className="card-header z-depth-1 mb-1"
                  role="tab"
                  id="heading7"
                >
                  <a
                    data-toggle="collapse"
                    data-parent="#accordionEx7"
                    href="#collapse7"
                    aria-expanded="true"
                    aria-controls="collapse7"
                  >
                    <h5 className="mb-0 white-text font-thin">
                      Inclusiveness
                      <i className="fas fa-angle-down rotate-icon"></i>
                    </h5>
                  </a>
                </div>
                <div
                  id="collapse7"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="heading7"
                  data-parent="#accordionEx7"
                >
                  <div className="card-body mb-1 unique-color-dark white-text">
                    <p>Explore and bring to light new knowledge and ideas</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div
                  className="card-header z-depth-1 mb-1"
                  role="tab"
                  id="heading8"
                >
                  <a
                    data-toggle="collapse"
                    data-parent="#accordionEx7"
                    href="#collapse8"
                    aria-expanded="true"
                    aria-controls="collapse8"
                  >
                    <h5 className="mb-0 white-text font-thin">
                      Participation
                      <i className="fas fa-angle-down rotate-icon"></i>
                    </h5>
                  </a>
                </div>
                <div
                  id="collapse8"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="heading8"
                  data-parent="#accordionEx7"
                >
                  <div className="card-body mb-1 unique-color-dark white-text">
                    <p>Explore and bring to light new knowledge and ideas</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div
                  className="card-header z-depth-1 mb-1"
                  role="tab"
                  id="heading9"
                >
                  <a
                    data-toggle="collapse"
                    data-parent="#accordionEx7"
                    href="#collapse9"
                    aria-expanded="true"
                    aria-controls="collapse9"
                  >
                    <h5 className="mb-0 white-text font-thin">
                      Quality<i className="fas fa-angle-down rotate-icon"></i>
                    </h5>
                  </a>
                </div>
                <div
                  id="collapse9"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="heading9"
                  data-parent="#accordionEx7"
                >
                  <div className="card-body mb-1 unique-color-dark white-text">
                    <p>Explore and bring to light new knowledge and ideas</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div
                  className="card-header z-depth-1 mb-1"
                  role="tab"
                  id="heading10"
                >
                  <a
                    data-toggle="collapse"
                    data-parent="#accordionEx7"
                    href="#collapse10"
                    aria-expanded="true"
                    aria-controls="collapse10"
                  >
                    <h5 className="mb-0 white-text font-thin">
                      Openness<i className="fas fa-angle-down rotate-icon"></i>
                    </h5>
                  </a>
                </div>
                <div
                  id="collapse10"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="heading10"
                  data-parent="#accordionEx7"
                >
                  <div className="card-body mb-1 unique-color-dark white-text">
                    <p>Explore and bring to light new knowledge and ideas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
