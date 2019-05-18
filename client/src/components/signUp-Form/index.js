// import all the dependencies
import React, { Component } from "react";
import { FormAction, FormLabel, FormButton, FormMessage, Dropdown, OptionForDropdown } from "../form";
import "./style.css";
import API from "../../utils/API";


// define a class SignUp to create the component
class SignUp extends Component {
    
    state = {
        firstStepRegistration: true,
        parentInfo: 
            [
                {
                    for: "userName",
                    label: "Enter a username",
                    placeholder: "username",
                    value: ""
                },
                {
                    for: "password",
                    label: "Enter your password",
                    placeholder: "password",
                    value: ""
                },
                {
                    for: "email",
                    label: "Enter your email",
                    placeholder: "example@email.com",
                    value: ""
                },
                {
                    for: "city",
                    label: "Which city do you live in?",
                    placeholder: "city",
                    value: "",
                },
            ],
        schools: [],
        gradeLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        formMessage:
            {
                message: "Already Have An Account?",
                action: "Login",
                alt: "login"
            },
        hasError: false
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

    handleInputChange = event => {
        const value = event.target.value;
        const key = event.target.getAttribute("data-id")
        let copy = [...this.state.userInfo]
        copy[key].value = value
        this.setState({
            userInfo: copy
        })
    }

    handleContinueButtonClick = event => {
        event.preventDefault();
        
        this.setState({
            firstStepRegistration: false
        });
    }


    render() {
        return (
            <div>
                {(this.state.firstStepRegistration) ? (
                    <div>
                        <FormAction>
                            {this.state.parentInfo.map((parentInfo, i) => {

                                return (
                                    <FormLabel
                                        key={i}
                                        data={i}
                                        for={parentInfo.for}
                                        label={parentInfo.label}
                                        placeholder={parentInfo.placeholder}
                                        value={parentInfo.value}
                                        handleChange={this.handleInputChange}
                                    />
                                );
                            })}
                            <div className="form-group text-left">
                                <label for="state">Which state do you live in?</label>
                                <select class="form-control bfh-states" id="state" name="state" data-country="US" data-state="CA"></select>
                            </div>
                        </FormAction>
                        <FormButton
                            nameButton="Continue"
                            handleButtonClick={this.handleContinueButtonClick}
                        />
                    </div>
                ) : (
                    <div>
                        <FormAction>
                            <FormLabel />
                        </FormAction>
                        <FormButton
                            nameButton="Sign Up"
                            handleButtonClick={this.handleSignUpButtonClick}
                        />
                    </div>
                )}
                
                <FormMessage
                    message={this.state.formMessage.message}
                    path={this.props.path}
                    action={this.state.formMessage.action}
                    id={this.state.formMessage.alt}
                />
            </div>
        );
    }

}


// export the component so it can be used by other files
export default SignUp;