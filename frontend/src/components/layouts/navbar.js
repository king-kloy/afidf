import React, { Component } from 'react';
import './navbar.css'
import AFID_logoF from '../images/AFID_logoF.png'
class navbar extends Component {
    state = {  }
    render() { 
        return (  
                <nav className=" sticky-top    navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#1C2331', }}>
                <a className="navbar-brand pt-0 mt-0" href="/">
                    <img src={AFID_logoF} style={{height: 30, width: 30, marginTop: 0, paddingTop: 0}}/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
                    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
                    <ul className="navbar-nav ml-auto"  id ="hello">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home
                        <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/documentaries">Documentaries</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/gallery">Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/blog">Blog</a>
                    </li>
                    </ul>
                    <ul className="navbar-nav ml-auto nav-flex-icons" style={{marginRight: 100,}}>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-user"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-default"
                        aria-labelledby="navbarDropdownMenuLink-333">
                        <a className="dropdown-item" href="/">Action</a>
                        <a className="dropdown-item" href="/">Another action</a>
                        <a className="dropdown-item" href="/">Something else here</a>
                        </div>
                    </li>
                    </ul>
                </div>
                </nav>

        );
    }
}
 
export default navbar;