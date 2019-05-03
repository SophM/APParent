// this is the main dashbaord after the user login
import React, { Component } from "react";
import Sidebar from "../components/sidebar";
import Activity from "../components/activity";
import PostCard from "../components/postCard";
// import WritePost from "../components/write-post";
// ============== Namita 
import AllMembers from "../components/allMembers";
import UserCard from "../components/userCard";
// ============== Namita 

import API from "../utils/API";


class Dashboard extends Component {

  state = {
    results: [],
    username: "Sophie, Namita , Samuel & Kevin",
    pageWanted: "dashboard"
  };

  componentDidMount() {
    API.searchAll()
      .then(
        res =>
          this.setState({
            results: res.data
          })
      )
      .catch(err => console.log(err));
  }

  handleClickOnSideBar = event => {
    event.preventDefault();
    this.setState({
      pageWanted: event.target.attributes.getNamedItem("data-content").value
    });

    console.log(this.state.pageWanted)
  }

  




  render() {
    return (
      <div>
        <Sidebar
          handleClick={this.handleClickOnSideBar}
        />
        <div id="page-wrap">

          <h1 className="mt-2 text-dark">Welcome</h1>
    
          {/* This is the activity section */}
          <Activity>
            {this.state.results.length ? (
              this.state.results.map((post) => {
                return (
                  <PostCard
                    key={post.id}
                    category={post.category}
                    title={post.title}
                    author={post.authors}
                    description={post.description}
                  />
                );
              })
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Activity>;

          {/* This is section is to display all members */}

          <AllMembers>

            <UserCard />

          </AllMembers>
        </div>



      </div>
    );
  }
}

export default Dashboard;
