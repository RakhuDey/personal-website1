import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="text-center">
      <ul className="social-media list-inline">
        <li className="list-inline-item">
          <a href="//facebook.com">
            <FontAwesomeIcon className="icon" icon={faFacebookF} />
          </a>
        </li>
        <li className="list-inline-item">
          <a href="//google.com">
            <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
          </a>
        </li>
        <li className="list-inline-item">
          <a href="//instagram.com">
            <FontAwesomeIcon className="icon" icon={faInstagram} />
          </a>
        </li>
        <li className="list-inline-item">
          <a href="//linkedin.com">
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
          </a>
        </li>
      </ul>
      <div className="white-color copyRight text-center">
        <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
