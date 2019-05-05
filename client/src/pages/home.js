// this is the landing page
import React, { Component } from "react";
import { FormTitle, FormAction, FormLabel, FormButton, FormMessage, Dropdown, OptionForDropdown } from "../components/./form";
import "../style/home.css";
import API from "../utils/API";

let labels = [];
const gradeLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

class Home extends Component {

    state = {
        schools: [],
        data: {
            title: "Sign Up",
            route: "/api/parents/signup",
            for: ["userName", "password", "email", "city",],
            nameButton: "Sign Up",
            message: "Already Have An Account?",
            path: "/login",
            action: "Login",
        }
    };

    componentDidMount() {
        // retrieves all the schools
        API.getAllSchools()
            .then(
                res => {
                    console.log(res.data);
                    this.setState({
                        schools: res.data
                    })
                }
            )
            .catch(err => console.log(err));
    }

    handleButtonClick = event => {
        event.preventDefault();
        if (event.target.id === "signup") {
            this.setState({
                data: {
                    title: "Sign Up",
                    route: "/api/parents/signup",
                    for: ["userName", "password", "email", "city"],
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
                                    {this.state.data.for.map( (item, i) => {
                                        // to get nicer labels for the inputs on the sign-up and login forms
                                        if (this.state.data.for.length !== 2) {
                                            labels = ["Enter a username", "Enter a password", "Enter an email", "Which city do you live in?"];
                                        } else {
                                            labels =["Enter your email", "Enter your password"]; 
                                        }
                                        return (
                                            <FormLabel
                                                key={item}
                                                for={item}
                                                label={labels[i]}
                                            />
                                        )
                                    })}

                                    {/* ternary so the state input is only displayed on the sign-up form */}
                                    {this.state.data.title === "Sign Up" ?
                                        <div>
                                            <div className="form-group text-left">
                                                <label for="state">Which state do you live in?</label>
                                                <select class="form-control bfh-states" id="state" name="state" data-country="US" data-state="CA"></select>
                                            </div>
                                            <FormLabel 
                                                for="nameFirstKid"
                                                label="What's the name of your first kid?"
                                            />
                                            <Dropdown
                                                for="grade"
                                                label="Which grade is your kid in?"
                                            >
                                                {gradeLevels.map(grade => {
                                                    return (
                                                        <OptionForDropdown option={grade}/>
                                                    )
                                                })}
                                            </Dropdown>
                                            <Dropdown 
                                                for="schoolId"
                                                label="Which school is your kid going to?"
                                            >
                                                {this.state.schools.map(school => {
                                                    return (
                                                        <OptionForDropdown 
                                                        option={school.name}
                                                        value={school.id}
                                                        />
                                                    )
                                                })}
                                            </Dropdown>
                                        </div>
                                    : (" ")} 

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

                
                <img className="logo" src="/images/logo-only-color.png" alt="logo"/>
                <h1 className="text-center mt-3">Welcome to APP@rent!</h1>
                <p className="text-center font-weight-bold">An app to meet other parents, help one another and share information!</p>

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