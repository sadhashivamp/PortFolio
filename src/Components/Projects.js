import React from "react";
import Portfolio from "../Images/Portfolio.png";
import Letsbuild from "../Images/Letsbuild.png";
import Ecommerce from "../Images/Ecommerce.png";
import Movieapp from "../Images/Movieapp.png";

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h1>What I Made</h1>
      <div className="projects">
        <div className="card">
          <div className="card-body">
            <img src={Portfolio} width="100%" alt="" />
            <h5 className="card-title">Port Folio</h5>

            <div className="card-buttons">
              <button>
                <a href="#3" className="btn btn-primary">
                  Code
                </a>
              </button>
              <button>
                <a href="#3" className="btn btn-primary">
                  View
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="card text-center">
          <div className="card-body">
            <img src={Letsbuild} width="100%" alt="" />
            <h5 className="card-title">Lets Build</h5>

            <div className="card-buttons">
              <button>
                <a href="#3" className="btn btn-primary">
                  Code
                </a>
              </button>
              <button>
                <a href="#3" className="btn btn-primary">
                  View
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="card text-end">
          <div className="card-body">
            <img src={Ecommerce} width="100%" alt="" />
            <h5 className="card-title">E Commerce</h5>

            <div className="card-buttons">
              <button>
                <a href="#3" className="btn btn-primary">
                  Code
                </a>
              </button>
              <button>
                <a href="#3" className="btn btn-primary">
                  View
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="card text-end">
          <div className="card-body">
            <img src={Movieapp} width="100%" height="200px" alt="" />
            <h5 className="card-title">Movie App</h5>

            <div className="card-buttons">
              <button>
                <a href="#3" className="btn btn-primary">
                  Code
                </a>
              </button>
              <button>
                <a href="#3" className="btn btn-primary">
                  View
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
