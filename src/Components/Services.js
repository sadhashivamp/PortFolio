import React from "react";
import { CgWebsite } from "react-icons/cg";
import { ImMobile } from "react-icons/im";

const Services = () => {
  return (
    <div className="services" id="services">
      <h2 className="title">My Services</h2>
      <div className="serv-content">
        <div className="card">
          <div className="box">
            <CgWebsite size="40px" color="black" />

            <div className="text">Web Developing</div>
            <p>
              Lorem ipsum dolor sit amet consectetual, adipisicicng elit. Rem
              quiit sunt, quasi quo illo
            </p>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <ImMobile size="40px" color="black" />
            <div className="text">App Developing</div>
            <p>
              Lorem ipsum dolor sit amet consectetual, adipisicicng elit. Rem
              quiit sunt, quasi quo illo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
