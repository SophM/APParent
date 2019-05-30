import React from "react";
import "./style.css";

// Converting the function to a component 
class AllMembers extends Component {
  render() {
    return (
      <div className="container mt-4 mb-4">
        <div className="card">
          <h5 id="allmembers-title" className="card-header ">All Members</h5>
          <div className="card-body">
            <div id="each-member" className="card-columns">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AllMembers; 