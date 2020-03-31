import React from "react";
import "./css/style.css";
import {
  MDBDropdownItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu
} from "mdbreact";

class dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <header id="header">
          <div className="container fluid border">
            <div className="row border">
              <div
                className="col-md-10 "
                // s
              >
                <h1 className="mt-4">
                  <span className="fas fa-cog " aria-hidden="true"></span>{" "}
                  Dashboard
                </h1>
              </div>
              <div className="col-md-2 create ">
                <MDBDropdown>
                  <MDBDropdownToggle
                    caret
                    color="danger"
                    style={{ borderRadius: 5 }}
                  >
                    create
                  </MDBDropdownToggle>
                  <MDBDropdownMenu color="danger" basic>
                    <MDBDropdownItem className="links">
                      Add Page
                    </MDBDropdownItem>
                    <MDBDropdownItem className="links">
                      Add Post
                    </MDBDropdownItem>
                    <MDBDropdownItem className="links">
                      Add User
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </div>
            </div>
          </div>
        </header>
        <section id="breadcrumb ">
          <div className="container ">
            <ol className="breadcrumb">
              <li className="active ">Dashboard</li>
            </ol>
          </div>
        </section>

        <div className="container">
          <div className="row ml-5">
            <div className="col-md-3 ">
              <div className="list-group list-group-flush">
                <a
                  href="/dashboard"
                  className="list-group-item active main-color-bg"
                >
                  <span className="fas fa-cog" aria-hidden="true"></span>{" "}
                  Dashboard
                </a>
                <a href="/pages" className="list-group-item">
                  <span className="fas fa-list-alt" aria-hidden="true"></span>{" "}
                  Pages <span className="badge badge-pill badge-light">12</span>
                </a>
                <a href="/posts" className="list-group-item">
                  <span className="fas fa-pen" aria-hidden="true"></span> Posts{" "}
                  <span className="badge badge-pill badge-light">33</span>
                </a>
              </div>
            </div>
            <div className="col-md-9">
              <div className="card card-default ">
                <div className="card-heading main-color-bg">
                  <h5 className="card-title pt-2 pl-3">Website Overview</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4 justify-content-center">
                      <div
                        className="breadcrumb dash-box"
                        style={{ paddingLeft: 100 }}
                      >
                        <h2>
                          <span
                            className="fas fa-list-alt"
                            aria-hidden="true"
                          ></span>{" "}
                          12
                        </h2>
                        <br />
                        <h4>Pages</h4>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div
                        className="breadcrumb dash-box"
                        style={{ paddingLeft: 100 }}
                      >
                        <h2>
                          <span
                            className="fas fa-pen"
                            aria-hidden="true"
                          ></span>{" "}
                          33
                        </h2>
                        <h4>Posts</h4>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="breadcrumb dash-box">
                        <h2>
                          <span
                            className="fas fa-chart-bar"
                            aria-hidden="true"
                          ></span>{" "}
                          12,334
                        </h2>
                        <h4>Visitors</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card card-default mt-3">
                <div className="card-heading">
                  <h3 className="card-title pl-3 pt-3">Latest Users</h3>
                </div>
                <div className="card-body">
                  <table className="table table-striped table-hover">
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Joined</th>
                    </tr>
                    <tr>
                      <td>Jill Smith</td>
                      <td>jillsmith@gmail.com</td>
                      <td>Dec 12, 2016</td>
                    </tr>
                    <tr>
                      <td>Eve Jackson</td>
                      <td>ejackson@yahoo.com</td>
                      <td>Dec 13, 2016</td>
                    </tr>
                    <tr>
                      <td>John Doe</td>
                      <td>jdoe@gmail.com</td>
                      <td>Dec 13, 2016</td>
                    </tr>
                    <tr>
                      <td>Stephanie Landon</td>
                      <td>landon@yahoo.com</td>
                      <td>Dec 14, 2016</td>
                    </tr>
                    <tr>
                      <td>Mike Johnson</td>
                      <td>mjohnson@gmail.com</td>
                      <td>Dec 15, 2016</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default dashboard;
