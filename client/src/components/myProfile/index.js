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
                    label:"Enter your username",
                    value: this.props.userName,
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
            ],

    };


    handleInputChange = event => {
        // const {name, value} = event.target;
        const value = event.target.value;
        // const column = event.target.id;
        const key = event.target.getAttribute("data-id")
        let copy = [...this.state.userInfo]
        copy[key].value = value
        this.setState({
            userInfo: copy
            // [column] : value
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

        const userUpdatedData = {
            userName: this.state.userInfo[0].value,
            city: this.state.userInfo[1].value,
            state: this.state.userInfo[2].value
        }

        console.log(userUpdatedData);

        //Updates the user profile 
        API.updateProfile(userUpdatedData)
            .then(res => {
                window.location.reload();
            })
            .catch(err => console.log(err)); 
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
                                key= {i}
                                data={i}
                                for={user.for}
                                name={user.for}
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