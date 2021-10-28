import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const Header = () => {
  return (
    <div className="l_header__wrapper">
      <div className="l_header__logo">
        <img
          src="http://assets.stickpng.com/images/58428ba1a6515b1e0ad75ab0.png"
          alt=""
        />
      </div>
      <div className="l_header_menu">
        <div>
          <Link to="/" className="link">
            Home
          </Link>
          <span></span>
        </div>
        <div>
          <Link to="/hero" className="link">
            Heros
          </Link>
          <span></span>
        </div>
        <div>
          <Link to="/about" className="link">
            About
          </Link>
          <span></span>
        </div>
        <div>
          <Link to="/contact" className="link">
            Contact
          </Link>
          <span></span>
        </div>
        <div>
          <Link to="/help" className="link">
            Help
          </Link>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
