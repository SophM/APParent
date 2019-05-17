// import all the dependencies
import React, { Component } from "react";
import { FormLabel, FormButton, Dropdown, OptionForDropdown } from "../form";
import "./style.css";
import API from "../utils/API";


// define a class SignUp to create the component
class SignUp extends Component {
    
    state = {
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
        kidInfo: [{}],
        schools: [],
        gradeLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        nameButton: "Continue",
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


    render() {
        return (
            <div>
                <FormAction>
                    {this.state.userInfo.map((info, i) => {

                        return (
                            <FormLabel
                                key={i}
                                data={i}
                                for={info.for}
                                label={info.label}
                                placeholder={info.placeholder}
                                value={info.value}
                                handleChange={this.handleInputChange}
                            />
                        );
                    }
                    )}
                    <div className="form-group text-left">
                        <label for="state">Which state do you live in?</label>
                        <select class="form-control bfh-states" id="state" name="state" data-country="US" data-state="CA"></select>
                    </div>
                </FormAction>
                <FormMessage
                    message={this.state.formMessage.message}
                    path={this.props.path}
                    action={this.state.formMessage.action}
                    id={this.state.formMessage.alt}
                />
                <FormButton
                    nameButton={this.state.nameButton}
                    handleButtonClick={this.handleButtonClick}
                />

            </div>
        );
    }

}


// export the component so it can be used by other files
export default SignUp;