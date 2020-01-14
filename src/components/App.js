import React from "react";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import Projects from "./Projects";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div>
        <Navbar />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <Projects />
      </div>
    </div>
  );
};

export default App;
