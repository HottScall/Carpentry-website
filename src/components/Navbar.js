import React from "react";
import "./Navbar.css";
import Logo from "../images/logo.jpg";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <ul id="nav">
          <img id="logo" src={Logo} alt="logo" />
          <li>
            <h1>L.A Sadler Carpentry</h1>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
