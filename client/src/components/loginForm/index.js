import React, { Component } from "react"
import { FormAction, FormLabel, FormButton, FormMessage } from "../components/./form";
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
        if (this.state.email.value && this.state.password.value) {
            API.login()
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
                                label={user.label}
                                value={user.value}
                                handleChange={this.handleInputChange}
                            />
                        );
                    }
                    )}
                </FormAction>
                <FormMessage
                    message={this.state.formMessage.message}
                    path={this.handleButtonClick}
                    action={props.path}
                    id={this.state.formMessage.alt}
                />
            </div>
        )
    }
}

export default LoginForm;