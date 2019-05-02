// this is the landing page
import React, { Component } from "react";

class Home extends Component {

    state = {
        
    };

    render() {
        return (
            <div>
                <h1 className="text-center mt-4">Welcome to APP@rent! Sign-up or Login!</h1>
                <div className="container text-center">
                    <button className="btn btn-lg btn-warning m-2">Sign-up</button>
                    <button className="btn btn-lg btn-success m-2">Login</button>
                </div>
            </div>
        )
    }

}

export default Home;