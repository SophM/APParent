import React from "react";
import "./style.css";

function Activity({children}) {
  return (
    <div className="container mt-4 mb-4">
      <div className="card">
        <h5 className="card-header">Activity Feed</h5>
        <div className="card-body" id="eachPost">{children}</div>
      </div>
    </div>

  );
}

export default Activity;
