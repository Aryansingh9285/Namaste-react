import React from 'react'
import { LOGO_URL } from './utils/costants';

const Header = () => {
    return (
      <div className="header">
        <div className="Logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

export default Header