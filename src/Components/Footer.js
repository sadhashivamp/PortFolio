import React from "react";

import { FaFacebookSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer__container" id="footer">
      <div className="footer__col1">
        <h1 className="footer__col1__title">Sadha Shivam</h1>

        <p>
          I am Web Developer and App Developer from Hyderabad, India. I always
          make websites that have unique designs, responsive and also a good
          performance rate.
        </p>
        <div className="social__links">
          <a href="https://www.facebook.com/sadhashivampendem">
            <FaFacebookSquare className="fac" size="6%" />
          </a>
          <a href="https://www.linkedin.com/in/sadha-shivam-pendem-673797146/">
            <BsLinkedin className="link" size="6%" />
          </a>
          <a href="https://github.com/sadhashivamp">
            <BsGithub className="git" size="6%" />
          </a>
          <a href="twitter">
            <FaTwitterSquare className="twit" size="6%" />
          </a>
        </div>
      </div>

      <div className="footer__col2">
        <h1>Important Links</h1>
        <a href="#home">Home</a>
        <br />
        <a href="#about">Aboute</a>
        <br />
        <a href="#education">Education</a>
        <br />
        <a href="#skills">Skills</a>
        <br />
        <a href="#projects">Projects</a>
        <br />

        <a href="#contact">Contact</a>
        <br />
      </div>

      <div className="footer__col3">
        <h1>Contact Info</h1>
        <h4>+91 8328285571</h4>
        <h4>sadha0106@gmail.com</h4>
        <div>
          Padmanagar colony,
          <br /> Nalgonda, <br /> Telangana 508001.
        </div>
      </div>
    </div>
  );
};

export default Footer;
