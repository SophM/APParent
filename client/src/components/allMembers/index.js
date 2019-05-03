import React from "react"; 

function AllMembers({children}) {  
    return (
      <div className="container-fluid mt-3">
        <div className="card">
          <h5 className="card-header">All Members</h5>
          <div className="card-body">{children}</div>
        </div>
      </div>
    );
}

export default  AllMembers; 