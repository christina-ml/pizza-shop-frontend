import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar__container">
            <div className="navbar__logo"><Link to="/">Student App</Link></div>
            <ul className="navbar__items">
              <li><Link to="/menu">Students</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="navbar__hamburgerMenu">
            =
            </div>
        </div>
        <div className="navbar__overlay"></div>
    </div>
  )
}

export default Navbar;