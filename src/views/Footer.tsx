import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="footer-sub-container">
        <div onClick={() => window.open("https://www.facebook.com/JMDBarreyro/")}>
          <FontAwesomeIcon icon={faFacebookF} className="footer-logo" />
        </div>
        <div onClick={() => window.open("https://www.linkedin.com/in/john-miko-barreyro-38463225b/")}>
          <FontAwesomeIcon icon={faLinkedin} className="footer-logo" />
        </div>
        <div onClick={() => window.open("https://github.com/barreyrojohnmiko")}>
          <FontAwesomeIcon icon={faGithub} className="footer-logo" />
        </div>
      </div>
      <div className="footer-text">
        Designed & Developed by John Miko Barreyro
      </div>
    </div>
  );
};

export default Footer;