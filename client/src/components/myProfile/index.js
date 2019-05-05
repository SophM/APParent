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

    handleEditButtonClick = event => {
        event.preventDefault();
        console.log("EDIT MY PROFILE");
        this.setState({
            disabled: false
        })
    }

    handleSaveButtonClick = event => {
        event.preventDefault();
        console.log("SAVE MY PROFILE");
        this.setState({
            disabled: true
        })
    }

    render() {
        return (
            <div>
                <FormContainer>
                    {/* <FormAction 
                    route={props.route} > */}
                    { this.state.disabled ? 
                        <FormTitle
                            title="View My Profile"
                        />
                    :
                        <FormTitle
                            title="Update Profile Info"
                        />
                    }

                    {/* Rendering Form labels using the userInfo object values */}

                    {this.state.userInfo.map((user , i) =>{

                        return(
                            <FormLabel
                                for={user.for}
                                disabled={this.state.disabled}
                                value={user.value}
                                handleChange={this.handleInputChange}
                            /> 
                        );
                    }
                    )} 

                    {/* Conditional hide & show the buttons */}
                    { this.state.disabled ? 
                        <FormButton
                            nameButton="Edit Profile"
                            handleButtonClick={this.handleEditButtonClick}
                        /> 
                    :  
                        <FormButton
                        nameButton="Save Profile"
                        handleButtonClick={this.handleSaveButtonClick}
                        /> 
                    }
                   
                    
                    {/* </FormAction> */}
                </FormContainer>
            </div>
        );
    }
}

export default MyProfile;