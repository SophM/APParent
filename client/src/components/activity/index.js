import React from "react";
import "./style.css";

function Activity({children}) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Activity</h1>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
}

export default Activity;
