// this is the main dashbaord after the user login
import React, { Component } from "react";
import Sidebar from "../components/sidebar";
import Activity from "../components/activity";
import PostCard from "../components/postCard";

class Dashboard extends Component {
  state = {
    username: "Sophie, Namita , Samuel & Kevin"
  };

  render() {
    return (
      <div>
        <Sidebar />
        <h1 className="text-center mt-4">Welcome {this.state.userName}</h1>

        <div className="container text-center" />

        {/* =====================================KCKCKC======================================================== */}

        {/* This is the activity section */}
        <Activity>

            <PostCard />

            <h3>No Results to Display</h3>

        </Activity>

        {/* =====================================KCKCKC======================================================== */}
      </div>
    );
  }
}

export default Dashboard;
