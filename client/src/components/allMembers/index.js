
import React, {Component} from "react";

import UserCard from "../userCard";
import FilterBy from "../FilterBy";

import API from "../../utils/API";
import "./style.css";

// Converting the function to a component 
class AllMembers extends Component {
  //Setting all default values 
  state = {
    members: []
  };

  componentDidMount() {

    //Retrives all the Members Data - By default displays all 
    API.searchAllMembers()
      .then(res =>
        this.setState({
          members: res.data
        })
      )
      .catch(err => console.log(err));
  }

  // function to filter the members based on the state selected 
  filterMemberListByState(filteredState) {
    // event.preventDefault();

    console.log("filterMemberListByState");
    console.log(`Option selected:`, filteredState);
    // retrieves all the members - filter by state 
    API.searchAllMembersForAState(filteredState)
      .then(results => {

        console.log("Filtered Members", results.data);
        //Refresh the Members data based on the filter criteria 
        this.setState({
          members: results.data
        })
      }
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container mt-4 mb-4">
        <div className="card">
          <h5 id="allmembers-title" className="card-header">All Members</h5>
          <FilterBy 
            handleChange={this.filterMemberListByState}/>
          <div className="card-body">
            <div id="each-member" className="card-columns">
              {/* {children} */}

              {this.state.members.length ? (
                this.state.members.map((member, i) => {
                  return (
                    <UserCard
                      key={member.id}
                      email={member.email}
                      userName={member.userName}
                      city={member.city}
                      state={member.state}
                      photoLink={member.photoLink}
                      parentId={member.id}
                    />
                  );
                })
              ) : (
                  <h3>No Results to Display</h3>
                )}

            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AllMembers; 