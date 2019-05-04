// this is the main dashbaord after the user login
import React, { Component } from "react";
import Sidebar from "../components/sidebar";
import Activity from "../components/activity";
import PostCard from "../components/postCard";
import WritePost from "../components/write-post";
import AllMembers from "../components/allMembers";
import UserCard from "../components/userCard";
import NavBar from "../components/nav";

import API from "../utils/API";


class Dashboard extends Component {

  state = {
    results: [],
    username: "Sophie, Namita , Samuel & Kevin",
    members: [],
    pageWanted: "dashboard",
    posts: []
  };

  componentDidMount() {

    //retrieves All the post 
    API.searchAll()
      .then(
        res =>
          this.setState({
            results: res.data
          })
      )
      .catch(err => console.log(err));
      
      //Retrives all the MEMbe
      API.searchAllMembers()
      .then(res =>
          this.setState({
            members: res.data
          })
      )
      .catch(err => console.log(err));
      
     
  }

  handleClickOnSideBar = event => {
    event.preventDefault();

    this.setState({
      pageWanted: event.target.attributes.getNamedItem("data-content").value
    });
          console.log("This is the result", this.state.results)

  }

  //Write a post 
  
  handleCreatePost = () => {

    //Pulling all the posts again redirect to dashboard 
    API.searchAll()
    .then(
      res =>
        this.setState({
          results: res.data,
          pageWanted: "dashboard"
        })
    )
    .catch(err => console.log(err));

  }
  

  render() {
    {/* display the page with the activity component */}
    if (this.state.pageWanted === "dashboard") {
      return (
        <div>
          <NavBar />
          <Sidebar
            handleClick={this.handleClickOnSideBar}
          />
          <div id="page-wrap">
  
            <h1 className="mt-2 text-dark">Welcome</h1>
      
            <Activity>
              {this.state.results.length ? (
                this.state.results.map((post) => {
                  return (
                    <PostCard
                      key={post.id}
                      category={post.category}
                      title={post.title}
                      name={post.parent.userName}
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

    {/* display the page with the myProfile component */}
    } else if (this.state.pageWanted === "myProfile") {
      return (
        <div>
          <NavBar />
          <Sidebar
            handleClick={this.handleClickOnSideBar}
          />
          <div id="page-wrap">
  
            <h1 className="mt-2 text-dark">Welcome</h1>
      
            
            
          </div>
        </div>
      );

    {/* display the page with the allMembers component */}    
    } else if (this.state.pageWanted === "allMembers") {
      return (
        <div>
          <NavBar />
          <Sidebar
            handleClick={this.handleClickOnSideBar}
          />
          <div id="page-wrap">
  
            <h1 className="mt-2 text-dark">Welcome</h1>
      
             <AllMembers>
              {this.state.members.length ? (
                this.state.members.map((member, i) => {
                  return (
                    <UserCard
                      key={member.id}
                      email={member.email}
                      userName={member.userName}
                      city={member.city}
                      state={member.state}
                    />
                  );
                })
              ) : (
                <h3>No Results to Display</h3>
              )}
          </AllMembers>

          </div>
        </div>
      );

    {/* display the page with the writePost component */}
    } else if (this.state.pageWanted === "writePost") {
      return (
        <div>
          <NavBar />
          <Sidebar
            handleClick={this.handleClickOnSideBar}
          />
          <div id="page-wrap">
  
            <h1 className="mt-2 text-dark">Welcome</h1>
      
            <WritePost 
              handleCreatePost={this.handleCreatePost}
            />  
                    
          </div>
        </div>
      );
    }
  }
}

export default Dashboard;
