import React from "react";
import "./Navbar.css";
import Logo from "../images/logo.jpg";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <ul id="nav">
          <img align="left" id="logo" src={Logo} alt="logo" />
          <li>
            <h3>
              <a href="#">Home</a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="#">About Us</a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="#">Projects</a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="#">Testimonials</a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="#">Contact Us</a>
            </h3>
          </li>
          <img align="right" id="logo" src={Logo} alt="logo" />
        </ul>
      </div>
    );
  }
}

export default Navbar;
