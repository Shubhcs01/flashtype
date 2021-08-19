import React from 'react';
import logo from './../../assets/logo.png';
import './Nav.css';

const Nav = () => {
    return (
        <div className="nav-container">

            <div className="nav-left">
                <img className="flash-logo" src={logo} alt="logo" />
                <p className="flash-logo-text">FlashType</p>
            </div>

            <div className="nav-left">
                <a
                    target="_blank"
                    rel="noreferrer"
                    className="linkedin-link"
                    href="https://linkedin.com/in/shubham-gupta-b521071b3"> LinkedIn</a>
            </div>

        </div>
    )
}

export default Nav;