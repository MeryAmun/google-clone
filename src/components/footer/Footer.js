import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__location">Location</p>
      <hr />
      <div className="footer__links">
        <div className="footer__leftLinks">
          <Link to="/about" className="footer__link">
            About
          </Link>
          <Link to="/about" className="footer__link">
            Advertising
          </Link>
          <Link to="/about" className="footer__link">
            Business
          </Link>
          <Link to="/about" className="footer__link">
            How Search Works
          </Link>
        </div>
        <div className="footer__rightLinks">
          <Link to="/about" className="footer__link">
            Privacy
          </Link>
          <Link to="/about" className="footer__link">
            Terms
          </Link>
          <Link to="/about" className="footer__link">
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
