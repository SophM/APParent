//This component is for Edit or View my Profile 

import React, { Component } from "react";
import { FormContainer, FormTitle, FormLabel, FormButton, FormAction } from "../form";
import API from "../../utils/API";

class MyProfile extends Component {

    state = {
        disabled: true,
        userInfo: 
            [
                {
                    for: "userName",
                    value: this.props.userName
                },
                {
                    for: "email",
                    value: this.props.email
                },
                {
                    for: "state",
                    value: this.props.state
                },
                {
                    for: "city",
                    value: this.props.city
                }
            ]
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
                    {/* <FormLabel
                        for="userName"
                        disabled={this.state.disabled}
                        value={this.props.userName}
                        // handleChange={this.handleInputChange}
                    />
                    <FormLabel
                        for="email"
                        disabled={this.state.disabled}
                        value={this.props.email}
                    // handleChange={this.handleInputChange}
                    />
                    <FormLabel
                        for="city"
                        disabled={this.state.disabled}
                        value={this.props.city}
                    // handleChange={this.handleInputChange}
                    />
                    <FormLabel
                        for="state"
                        disabled={this.state.disabled}
                        value={this.props.state}
                    // handleChange={this.handleInputChange}
                    /> */}
                    
                    {this.state.userInfo.map((user , i) =>{

                        return(
                            <FormLabel
                                for={user.for}
                                disabled={this.state.disabled}
                                value={user.value}
                            // handleChange={this.handleInputChange}
                            /> 
                        );
                    }
                    )} 

                    {/* Conditional hide & show the buttons */}
                    { this.state.disabled ? 
                        <FormButton
                            nameButton="Edit Profile"
                            handleButtonClick={this.handleButtonClick}
                        /> 
                    :  
                        <FormButton
                        nameButton="Save Profile"
                        handleButtonClick={this.handleButtonClick}
                        /> 
                    }
                   
                   
                    {/* </FormAction> */}
                </FormContainer>
            </div>
        );
    }
}

export default MyProfile;