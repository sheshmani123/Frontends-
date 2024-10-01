import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={"./logo.png"} alt="" style={{ width: "18%" }} />
          <p>
            Prisuncart is dedicated to superior customer service and
            productivity. Our journey from a simple idea to an industry leader
            reflects our commitment to innovation.
          </p>
          {/* <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div> */}
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutUs">About us</Link>
            </li>
            <li>
              <Link to="/refund-policy">Refund Policy</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy policy</Link>
            </li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>support@prisuncart.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copright 2024 @ prisuncart.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
