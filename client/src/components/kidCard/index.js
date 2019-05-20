import React from "react"; 
// import "./style.css";

function KidCard({children}) {  
    return (
      <div className="container mt-4 mb-4">
        <div className="card">
          <h5 className="card-header">Kid Information</h5>
          <div className="card-body">
            <div className="card-columns">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
}

export default  KidCard; 