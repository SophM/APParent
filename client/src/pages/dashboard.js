// this is the main dashbaord after the user login
import React, { Component } from "react";
import Sidebar from "../components/sidebar";
import Activity from "../components/activity";
import PostCard from "../components/postCard";
// import WritePost from "../components/write-post";
import API from "../utils/API";


class Dashboard extends Component {
  state = {
    results: [],
    username: "Sophie, Namita , Samuel & Kevin"
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

  render() {
    return (
      <div>
        <Sidebar />
        <div id="page-wrap">
      
            <h1>Welcome</h1>
            {/* This is the activity section */}
            <Activity>
              {this.state.results.length ? (
                this.state.results.map((post, i) => {
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
            </Activity>
           
        </div>

       
    
     </div>
    );
  }
}

export default Dashboard;
