//This component is for Edit or View my Profile 

import React, { Component } from "react";
import { FormContainer, FormTitle, FormLabel, FormButton, FormAction, Dropdown, OptionForDropdown } from "../form";
import API from "../../utils/API";

class MyProfile extends Component {

    state = {
        disabled: true,
        userInfo: 
            [
                {
                    for: "userName",
                    label:"Enter your userName",
                    value: this.props.userName
                },
                {
                    for: "email",
                    label:"Enter your email",
                    value: this.props.email
                },
                {
                    for: "city", //db column
                    label:"Enter your city", //message u see 
                    value: this.props.city
                },
                {
                    for: "state",
                    label:"Choose a state",
                    value: this.props.state
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
        // console.log("EDIT MY PROFILE");
        this.setState({
            disabled: false
        })
    }

    handleSaveButtonClick = event => {
        event.preventDefault();
        // console.log("SAVE MY PROFILE");
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
                                label={user.label}
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