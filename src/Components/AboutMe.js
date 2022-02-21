import React from "react";
import Sadha21 from "../Images/Sadha21.png";
import { BsArrowBarRight } from "react-icons/bs";

const AboutMe = () => {
  return (
    <div className="about" id="about">
      <h2 className="title">About Me</h2>
      <div className="row1">
        <img className="row1-img" src={Sadha21} alt="sadha" />

        <div className="row1-col2">
          <h1>I'am Sadha Shivam</h1>
          <span>Passionate web and full stack developer</span>
          <p>
            Innovative Front End Developer With 6 Months Experience Building And
            Maintaining Responsive Websites In The Recruiting Industry.
            Proficient In Git/GitHub, HTML, CSS, JQuery, React ,
            Redux,JavaScript ,Bootstrap, Firebase, Next JS Modern Libraries And
            Frameworks.
          </p>
          <div className="row1-col1-2">
            <h4>
              Age : <span>28</span>
            </h4>
            <h4>
              Email :{" "}
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqVPLSbbNdGZQFDTwKHWHLmmhhSJNlPbLZSnpjJrWRPfplrkfbPLxhcdPTQBHTzQKpTQTL">
                sadha0106@gmail.com
              </a>
            </h4>
            <h4>
              Phone : <span>8328285571</span>
            </h4>
            <h4>
              Place : <span>Hyderabad, India - 500004</span>
            </h4>
            <button className="row1-col1-2-button">
              <a href="https://drive.google.com/file/d/1k1rnRSyoyU6pypWUL56uKJbEABesATK5/view?usp=sharing">
                Resume
              </a>
              <BsArrowBarRight size="20px" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
