// js for nav bar

import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav id="nav-bar" className="nav navbar-expand-lg mx-auto">
      <a className="nav-link text-info" href="/">
        <img src="./images/logo-only-color.png" />
      </a>
      <h1 id="name-app" className="mt-4 font-weight-bold text-white ml-auto">APP@rent</h1>
      <a className="nav-link mt-2 text-white ml-auto mt-4 mr-2" id="logout" href="/"><h4>Logout</h4></a>
    </nav>
  );
}

export default Nav;
