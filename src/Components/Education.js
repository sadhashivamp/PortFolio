import React from "react";
import { MdCastForEducation } from "react-icons/md";
import Soal from "../Images/Soal.png";

import Srtist from "../Images/Srtist.jpg";

const Education = () => {
  return (
    <div className="education" id="education">
      <div className="title">
        <MdCastForEducation size="40px" /> <h2>My Education</h2>
      </div>

      <div>
        <div className="box1">
          <img src={Soal} width="130px" alt="SOAL" />
          <div className="box1-col1">
            <h1>Frontend Developer</h1>
            <h3>School of accelerating learning, (SOAL)</h3>
            <h2>2021 - 2022</h2>
          </div>
        </div>

        <div className="box2">
          <img src={Srtist} width="130px" alt="SOAL" />
          <div className="box2-col1">
            <h1>B Tech ( Mechanical Engineering )</h1>
            <h3>
              Swami rama nandha tirtha institute of science and technology,
              (SRTIST)
            </h3>
            <h2>2012 - 2015</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
