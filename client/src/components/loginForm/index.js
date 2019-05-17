import React, { Component } from "react"
import { FormAction, FormLabel, FormButton, FormMessage } from "../form";
import API from "../../utils/API";

class LoginForm extends Component {
    state = {
        userInfo:
            [
                {
                    for: "email",
                    label: "Enter your email",
                    value: ""
                },
                {
                    for: "password",
                    label: "Enter your password",
                    value: "",
                }
            ],
        formMessage:
        {
            message: "No Account?",
            action: "Register",
            alt: "signup"
        },
        hasError: false
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

    handleSubmitButtonClick = event => {
        event.preventDefault();
        if (this.state.userInfo[0].value && this.state.userInfo[1].value) {
            API.login(
                {
                    email: this.state.userInfo[0].value,
                    password: this.state.userInfo[1].value
                }
            )
                .then(res =>
                    window.location.reload()
                )
                .catch(err => console.log(err))
        }
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
                                value={info.value}
                                handleChange={this.handleInputChange}
                            />
                        );
                    }
                    )}
                </FormAction>
                <FormMessage
                    message={this.state.formMessage.message}
                    path={this.props.path}
                    action={this.state.formMessage.action}
                    id={this.state.formMessage.alt}
                />
                <FormButton
                nameButton="Submit"
                handleButtonClick={this.handleSubmitButtonClick}
                />
            </div>
        )
    }
}

export default LoginForm;