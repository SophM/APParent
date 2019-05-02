import React from "react";
import "./style.css";

function Activity({children}) {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Activity</h1>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
}

export default Activity;
