import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <header role="banner">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="index.html">
                L.A Sadler Carpentry
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarsExample05"
                aria-controls="navbarsExample05"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Navbar;
