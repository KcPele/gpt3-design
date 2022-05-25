import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <div className="gpt3__footer section__padding" id="footer">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
        <button type="button">Request Early Access</button>
      </div>
      <div className="gpt3__footer-content">
        <div className="gpt3__footer-content-image">
          <img src={logo} alt="gpt-3 logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-content-right">
          <div className="gpt3__footer-content_links">
            <h4>Links</h4>
            <div className="gpt3__footer-content_btn">
              <button type="button">Overons</button>
              <button type="button">Social Media</button>
              <button type="button">Counters</button>
              <button type="button">Contact</button>
            </div>
          </div>
          <div className="gpt3__footer-content_links">
            <h4>Company</h4>
            <div className="gpt3__footer-content_btn">
              <button type="button">Terms & Conditions</button>
              <button type="button">Privacy Policy</button>
              <button type="button">Contact</button>
            </div>
          </div>
          <div className="gpt3__footer-content_links">
            <h4>Get in touch</h4>
            <div className="gpt3__footer-content_btn">
              <button type="button">Crechterwoord K12 182 DK Alknjkcb </button>
              <button type="button">085-132567</button>
              <button type="button">info@payme.net</button>
            </div>
          </div>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
