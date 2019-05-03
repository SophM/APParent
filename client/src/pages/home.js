// this is the landing page
import React, { Component } from "react";
import { FormTitle, FormAction, FormLabel, FormButton, FormMessage } from "../components/./form";
import "../style/home.css"
class Home extends Component {

    state = {
        data: {
            title: "Sign Up",
            route: "/api/parents/signup",
            for: ["userName", "password", "email", "city", "state",],
            nameButton: "Sign Up",
            message: "Already Have An Account?",
            path: "/login",
            action: "Login"
        }
    };

    handleButtonClick = event => {
        event.preventDefault();
        if (event.target.id === "signup") {
            this.setState({
                data: {
                    title: "Sign Up",
                    route: "/api/parents/signup",
                    for: ["userName", "password", "email", "city", "state",],
                    nameButton: "Sign Up",
                    message: "Already Have An Account?",
                    action: "Login",
                    alt:"login"
                }

            })
        }
        else {
            this.setState({
                data: {
                    title: "Login",
                    route: "/api/parents/login",
                    for: ["email", "password"],
                    nameButton: "Login",
                    message: "No Account?",
                    action: "Register",
                    alt: "signup"
                }

            })
        }
    }

    render() {
        return (
            <div className="container main">
                <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <FormTitle
                                    title={this.state.data.title}
                                />
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">


                                <FormAction
                                    route={this.state.data.route}
                                >
                                    {this.state.data.for.map(item => {
                                        return (
                                            <FormLabel
                                                key={item}
                                                for={item}
                                            />
                                        )
                                    })}
                                    <FormButton
                                        nameButton={this.state.data.nameButton}
                                    />
                                </FormAction>
                                <FormMessage
                                    message={this.state.data.message}
                                    path={this.handleButtonClick}
                                    action={this.state.data.action}
                                    id={this.state.data.alt}
                                />

                            </div>

                        </div>
                    </div>
                </div>

                <h1 className="text-center mt-4">Welcome to APP@rent!</h1>
                <img className="logo" src="/images/logo-only-color.png" alt="logo"/>

                <div className="row">
                    <div className="col-6 text-center">
                        <button className="button" id="signup" data-toggle="modal" data-target="#exampleModalLong" onClick={this.handleButtonClick}>Sign-up</button>
                    </div>

                    <div className="col-6 text-center">
                        <button className="button" id="login" data-toggle="modal" data-target="#exampleModalLong" onClick={this.handleButtonClick}>Login</button>
                    </div>
                </div>




            </div>
        )
    }

}

export default Home;