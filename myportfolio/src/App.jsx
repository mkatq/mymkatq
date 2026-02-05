import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import "./App.css";
import Education from "./components/Education";
import Contact from "./components/Contact";
import FloatingActionButton from "./components/FloatingActionButton";
import Copyright from "./components/Copyright";
import Certifications from "./components/Certifications";

// Import other components...

const App = () => (
  <div style={ {
    alignItems : "center"
  }}>
    <Navbar />
    <About />
    <Projects />
    <Skills />
    <Education />
    <Certifications/>
    <Contact />
    <FloatingActionButton />
    <Copyright/>

    {/* Add other sections */}
  </div>
);

export default App;
