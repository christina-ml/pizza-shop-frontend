import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar__logo">
        <div className="Navbar__logo__icon">
          icon
        </div>
        <h1>Pizza Shop</h1>
      </div>
      <div></div>
      <div className="Navbar__links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;