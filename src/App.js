import React from "react";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Education from "./Components/Education";

import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
      <Education />
      <Services />
      <Skills />
      <Projects />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
