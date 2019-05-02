// js for nav bar

import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="nav navbar-expand-lg navbar-dark">
      <a className="nav-link text-info" href="/">
        <img src="./images/logo-APParent-color.png" />
      </a>
      <a className="nav-link mt-2 text-info" id="logout" href="/logout"><p>Logout</p></a>
    </nav>
  );
}

export default Nav;
