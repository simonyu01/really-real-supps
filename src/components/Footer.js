import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTwitter,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";



function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-sections">
        <div className="footer-section">
          <h3 className="section-heading" style={{ margin: "0" }}>
            Disclaimer
          </h3>
          <p className="section-text" style={{ margin: "1em 0 0 0" }}>
            These statements have not been evaluated by the FDA. These products
            are not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
        <div className="footer-section">
          <h3 className="section-heading" style={{ margin: "0" }}>
            Useful Links
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "1em 0 0 0",
            }}
          >
            <Link to="/" className="section-text">
              Home
            </Link>
            <Link to="/products" className="section-text">
              Products
            </Link>
            <Link to="/about" className="section-text">
              About
            </Link>
            <Link to="/account" className="section-text">
              Account
            </Link>
          </div>
        </div>
        <div className="footer-section">
          <h3 className="section-heading" style={{ margin: "0" }}>
            Follow Us
          </h3>
          <div
            className="footer-sections"
            style={{ margin: "1em 0 0", gap: "1em", justifyContent: "flex-end" }}
          >
            <Link to="https://www.linkedin.com/in/simonyu01/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} className="social-icons" />
            </Link>

            <Link to="https://github.com/simonyu01" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="social-icons" />
            </Link>

            <Link to="https://www.instagram.com/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} className="social-icons" />
            </Link>

            <Link to="https://www.facebook.com/" target="_blank">
              <FontAwesomeIcon icon={faFacebook} className="social-icons" />
            </Link>

            <Link to="https://www.twitter.com" target="_blank">
              <FontAwesomeIcon icon={faTwitter} className="social-icons" />
            </Link>
          </div>
        </div>
      </div>
      <span className="divider" />
      <div className="footer-sections" style={{ margin: 0, gap: 0 }}>
        <h2 className="section-text">
          © Copyright 2023 Simon Yu. All rights reserved
        </h2>
        <h2 className="section-text">
          Inspired By: realscienceathletics.com
        </h2>
      </div>
    </div>
  );
}

export default Footer;
