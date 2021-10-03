import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Alberto Ramirez M.</h1>
        <p>Fuenlabrada - Madrid</p>
        <p>alberto.ramirez.m7@gmail.com</p>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <p>Let's get down to work</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Design in React</div>
        <div className="sns-links">
          <a
            href="https://www.linkedin.com/in/alberto-ramirez-m/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a
            href="https://github.com/alberto-rm"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github github"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
