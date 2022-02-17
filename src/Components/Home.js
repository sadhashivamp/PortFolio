import React from "react";

const Home = () => {
  return (
    <div>
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <h3 className="text-1">Hello, my name is</h3>
            <h1 className="text-2">Sadha Shivam Pendem</h1>
            <div className="text-3">
              And I'm a <span>Frontend Developer</span>
            </div>
          </div>
          <div>
            <button className="home-button">Hire Me</button>{" "}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
