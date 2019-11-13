import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import {Link } from 'react-scroll';
import './navbar.css';
class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      {this.prop}
      <MDBNavbar color="unique-color-dark" scrolling transparent className="myNavbar" dark expand="md"  fixed="top">
        <MDBNavbarBrand className='ml-5'>
          <strong className="white-text font-weight-bold">AFIDF</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right  id ="hello">
            <MDBNavItem >
              <Link to="mission" spy={true} smooth={true} offset={-70} duration= {500}>
                <MDBNavLink to="/vision" >Mission</MDBNavLink>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link to="vision" spy={true} smooth={true} offset={-70} duration= {500}>
                <MDBNavLink to="/mission" >Vision</MDBNavLink>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <NavLink to='/documentaries'>
                <MDBNavLink to='/documentaries' >Documentaries</MDBNavLink>
              </NavLink>
            </MDBNavItem>
            <MDBNavItem>
               <MDBNavLink to="">Awards</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right style={{marginRight: 100,}}>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="instagram" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!" className='dd-link'>Focal points</MDBDropdownItem>
                  <MDBDropdownItem href="/signup" className='dd-link'>Register</MDBDropdownItem>
                  <MDBDropdownItem href="/signin" className='dd-link'>Sign in</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default Navbar;