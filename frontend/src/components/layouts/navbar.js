import React, { Component } from "react";
import "./navbar.css";
import AFID_logoF from "../images/AFID_logoF.png";
import { NavLink } from "react-router-dom";
class navbar extends Component {
  state = {};
  render() {
    return (
      <nav
        className=" sticky-top    navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#1C2331" }}
      >
        <a className="navbar-brand pt-0 mt-0 ml-5" href="/">
          <img
            src={AFID_logoF}
            style={{ height: 30, width: 30, marginTop: 0, paddingTop: 0 }}
            alt="the logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent-333"
          aria-controls="navbarSupportedContent-333"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent-333"
        >
          <ul className="navbar-nav ml-auto" id="hello">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="links-active"
                className="nav-link"
                n
              >
                Home
              </NavLink>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Documentation
              </a>
              <div
                class="dropdown-menu dropdown-primary dropdown-default"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item dd-link" href="/documentaries">
                  Main
                </a>
                <a class="dropdown-item dd-link" href="/awards">
                  Awards
                </a>
                <a class="dropdown-item dd-link" href="/">
                  Submission
                </a>
              </div>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/gallery"
                activeClassName="links-active"
                className="nav-link"
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="links-active"
                className="nav-link"
              >
                Blog
              </NavLink>
            </li>
          </ul>
          <ul
            className="navbar-nav ml-auto nav-flex-icons"
            style={{ marginRight: 100 }}
          >
            <li className="nav-item dropdown" style={{ marginRight: 20 }}>
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink-333"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-user"></i>
              </a>
              <div
                className="dropdown-menu dropdown-menu-left dropdown-default mt-2"
                aria-labelledby="navbarDropdownMenuLink-333"
              >
                <a className="dropdown-item dd-link" href="/signin">
                  Sign In
                </a>
                <a className="dropdown-item dd-link" href="/signup">
                  Sign Up
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default navbar;
