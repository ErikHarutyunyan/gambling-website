import React from "react";
// Styles
import { Footer } from "./FooterHome.styles";
import chromeImg from "../../assets/images/chrome.png";
import safariImg from "../../assets/images/safari.png";
import { Link } from "react-router-dom";
const FooterHome = () => {
  return (
    <Footer>
      <p>© BDTWIN All rights Reserved</p>
      <p>
        All content, image, and logo are respected property of BDTWIN and
        protected by copyright law.
      </p>
      <p>
        <span>Our platform is most compatible with:</span>
        <span className="platform">
          <img src={chromeImg} alt={"chrome"} />
          <img src={safariImg} alt={"safari"} />
        </span>
      </p>
      <div>
        <Link to="/">Responsible Gaming Policy</Link>
        <Link to="/">21+ Responsible Gaming</Link>
      </div>
    </Footer>
  );
};

export default FooterHome;
