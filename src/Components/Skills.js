import React from "react";
import SadhaSk1 from "../Images/SadhaSk1.png";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="title">My skills & Abilities</h2>
      <div className="max-width">
        <div className="skills-box">
          <img src={SadhaSk1} alt="" />
          <div className="skills-content">
            <div className="skill">
              <div className="bars">
                <div className="info">
                  <span>GIT/GITHUB</span>
                  <span>90%</span>
                </div>
                <div className="line git"></div>
              </div>

              <div className="bars">
                <div className="info">
                  <span>HTML</span>
                  <span>80%</span>
                </div>
                <div className="line html"></div>
              </div>

              <div className="bars">
                <div className="info">
                  <span>CSS</span>
                  <span>70%</span>
                </div>
                <div className="line css"></div>
              </div>

              <div className="bars">
                <div className="info">
                  <span>JAVA SCRIPT</span>
                  <span>70%</span>
                </div>
                <div className="line js"></div>
              </div>

              <div className="bars">
                <div className="info">
                  <span>BOOTSTRAP</span>
                  <span>70%</span>
                </div>
                <div className="line boot"></div>
              </div>

              <div className="bars">
                <div className="info">
                  <span>MATERIAL UI</span>
                  <span>70%</span>
                </div>
                <div className="line ui"></div>
              </div>

              <div className="bars">
                <div className="info">
                  <span>HEROKU</span>
                  <span>90%</span>
                </div>
                <div className="line heroku"></div>
              </div>

              <div className="bars">
                <div className="info">
                  <span>FIRE BASE</span>
                  <span>60%</span>
                </div>
                <div className="line fire"></div>
              </div>

              <div className="bars">
                <div className="info">
                  <span>REACT JS</span>
                  <span>80%</span>
                </div>
                <div className="line react"></div>
              </div>

              <div className="bars">
                <div className="info">
                  <span>REACT NATIVE</span>
                  <span>60%</span>
                </div>
                <div className="line native"></div>
              </div>

              <div className="bars">
                <div className="info">
                  <span>REDUX</span>
                  <span>60%</span>
                </div>
                <div className="line redux"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
