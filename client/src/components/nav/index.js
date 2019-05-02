// js for nav bar

import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="nav navbar-expand-lg navbar-dark">
      <a className="nav-link text-info" href="/">
        <h3>Apparents</h3>
      </a>
      <a className="nav-link mt-2 text-info" id="logout" href="/logout">Logout</a>
    </nav>
  );
}

export default Nav;
