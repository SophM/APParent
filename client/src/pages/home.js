// this is the landing page
import React, { Component } from "react";
import {formContainer, formTitle, formLabel, formButton, formMessage} from "../components/./form";
class Home extends Component {

    state = {
        data: {
                    title: "Sign Up",
                    for: ["userName", "password", "email", "city", "state", ],
                    button: "Sign Up", 
                    message: "Already Have An Account?",
                    path: "/login", 
                    action: "Login"
                }
    };

    handleButtonClick = event => {
        event.preventDefault();
        if(event.target.id === "signup"){
            this.setState({
                data: {
                    title: "Sign Up",
                    for: ["userName", "password", "email", "city", "state", ],
                    button: "Sign Up", 
                    message: "Already Have An Account?",
                    path: "/login", 
                    action: "Login"
                }
                
            })
        }
        else {
            this.setState({
                data: {
                    title: "Login",
                    for: ["email", "password"],
                    button: "Login", 
                    message: "No Account?",
                    path: "/register", 
                    action: "Register"
                }
                
            }) 
        }
    }

    render() {
        return (
            <div>
                <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <formContainer>
                                    <formTitle
                                    title={this.state.data.title}
                                    />
                                    {this.state.data.for.map(item => {
                                        return(
                                            <formLabel
                                            for={item}
                                            />
                                        )
                                    })}
                                    <formButton
                                    button={this.state.data.button}
                                    />
                                    <formMessage
                                    message={this.state.data.message}
                                    path={this.state.data.path}
                                    action={this.state.data.action}
                                    />
                                </formContainer>
                            </div>
        
                        </div>
                    </div>
                </div>











                <h1 className="text-center mt-4">Welcome to APP@rent! Sign-up or Login!</h1>
                <div className="container text-center">
                    <button className="btn btn-lg btn-warning m-2" id="signup" data-toggle="modal" data-target="#exampleModalLong" onClick={this.handleButtonClick}>Sign-up</button>
                    <button className="btn btn-lg btn-success m-2" id="login" data-toggle="modal" data-target="#exampleModalLong" onClick={this.handleButtonClick}>Login</button>
                </div>

            </div>
        )
    }

}

export default Home;