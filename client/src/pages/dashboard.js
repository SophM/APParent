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
    results: [{
        "id": 6,
        "title": "Things to do this weekend",
        "description": "Check this link out if you want to have fun this weekend with your kids: https://zenhabits.net/100-ways-to-have-fun-with-your-kids-for/",
        "category": "Event",
        "createdAt": "2019-04-12T03:31:57.000Z",
        "updatedAt": "2019-04-12T03:31:57.000Z",
        "parentId": 1
        }],
    username: "Sophie, Namita , Samuel & Kevin"
  };

  componentDidMount() {
    // API.searchAll()
    //   .then(
    //     res =>
    //       this.setState({
    //         results: res.data.items
    //       })
    //     // console.log("reesponse", res.data.items)
    //   )
    //   .catch(err => console.log(err));
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
           {/* This is section is to display all members */}
          
            <AllMembers>

              <UserCard />

            </AllMembers>
          {/* This is section is to display all members */}
        </div>

       
    
     </div>
    );
  }
}

export default Dashboard;
