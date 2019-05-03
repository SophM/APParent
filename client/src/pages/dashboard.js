// this is the main dashbaord after the user login
import React, { Component } from "react";
import Sidebar from "../components/sidebar";
import Activity from "../components/activity";
import PostCard from "../components/postCard";
import WritePost from "../components/write-post";

class Dashboard extends Component {
  state = {
    username: "Sophie, Namita , Samuel & Kevin"
  };

  render() {
    return (
      <div>
        <Sidebar />
        <div id="page-wrap">
            <h1>Welcome</h1>
            <WritePost/>
        </div>

       
    
     </div>
    );
  }
}

export default Dashboard;
