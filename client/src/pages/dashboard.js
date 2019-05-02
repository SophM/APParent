// this is the main dashbaord after the user login
import React, { Component } from "react";
import Sidebar  from "../components/sidebar";

class Dashboard extends Component {

    state = {
     username: 'Sophie, Namita , Samuel & Kevin'
    };

    render() {
        return (
            <div>
                <Sidebar /> 
                <h1 className="text-center mt-4">Welcome {this.state.userName}</h1> 

                <div className="container text-center"> 
                </div>
                   
            </div>
        )
    }

}

export default Dashboard;