//This component is for Edit or View my Profile 

//
import React, { Component } from "react";
import { FormContainer, FormTitle, FormLabel, FormButton, FormAction } from "../form";
import API from "../../utils/API";

class MyProfile extends Component {

    state = {
        disabled: true
    };

    handleInputChange = event => {
        const value = event.target.value;
        const column = event.target.id
        this.setState({
            [column]: value
        })

    }

    handleButtonClick = event => {
        event.preventDefault();
        console.log("EDIT MY PROFILE");
        this.setState({
            disabled: false
        })
    }

    render() {
        return (
            <div>
                <FormContainer>
                    {/* <FormAction 
                    route={props.route} > */}

                    <FormTitle
                        title="View My Profile"
                    />
                    <FormLabel
                        for="userName"
                        // disabled = {(this.state.disabled)? "disabled" : ""}
                        disabled={this.state.disabled}
                    // handleChange={this.handleInputChange}
                    />
                    <FormLabel
                        for="password"
                        disabled={this.state.disabled}
                    // handleChange={this.handleInputChange}
                    />
                    <FormLabel
                        for="email"
                        disabled={this.state.disabled}
                    // handleChange={this.handleInputChange}
                    />
                    <FormLabel
                        for="city"
                        disabled={this.state.disabled}
                    // handleChange={this.handleInputChange}
                    />
                    <FormLabel
                        for="state"
                        disabled={this.state.disabled}
                    // handleChange={this.handleInputChange}
                    />
                    <FormButton
                        nameButton="Edit Profile"
                        handleButtonClick={this.handleButtonClick}
                    />
                    {/* </FormAction> */}
                </FormContainer>
            </div>
        );
    }
}

export default MyProfile;