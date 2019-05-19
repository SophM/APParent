//This component is for Edit or View my Profile 

import React, { Component } from "react";
import { FormContainer, FormTitle, FormLabel, FormButton, Dropdown, OptionForDropdown } from "../form";
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
                },
                {
                    for: "photoLink",
                    label:"Enter a link for your profile picture",
                    value: this.props.photoLink
                }
            ],
            kidInfo: 
            [
                {
                    for: "name",
                    label:"Update your Kid's Name",
                    value: this.props.name
                } 
            ],
            schools: [],
            kids:[],
            gradeLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
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
    //Enable the User to update his profile 
    handleEditButtonClick = event => {
        event.preventDefault();
        // console.log("EDIT MY PROFILE");
        this.setState({
            disabled: false
        })
    }
    //Saves the changes made to the profile 
    handleSaveButtonClick = event => {
        event.preventDefault();
        console.log("SAVE MY PROFILE");
        this.setState({
            disabled: true
        })

        const userUpdatedData = {
            userName: this.state.userInfo[0].value,
            city: this.state.userInfo[1].value,
            state: this.state.userInfo[2].value,
            photoLink: this.state.userInfo[3].value
        }

        console.log("Parent Details ", userUpdatedData);

        //Updates the user profile 
        API.updateProfile(userUpdatedData)
            .then(res => {
                window.location.reload();
            })
            .catch(err => console.log(err)); 
    }

    // //Related to additional Family members : 
    // handleAddNewMember = event => {
    //     event.preventDefault();
    //     console.log("Add NEW FAMILY MEMBER");
    //     //Enable the component 
    //     this.setState({
    //         addnewMember : true 
    //     })

    // }

    // handleInputMemberChange = event => {
    //     // const {name, value} = event.target;
    //     const value = event.target.value;
    //     // const column = event.target.id;
    //     const key = event.target.getAttribute("data-id")
    //     let copy = [...this.state.kidInfo]
    //     copy[key].value = value
    //     this.setState({
    //         kidInfo: copy
    //         // [column] : value
    //     })
    // }

    // handleSaveNewKid = event => {
    //     event.preventDefault();
    //     console.log("SAVE NEW KID INFO");
    //     this.setState({
    //         addnewMember: false
    //     })

    //     const kidInfoData = {
    //         name: this.state.kidInfo[0].value,
    //         gradeLevel: this.state.grade.value
    //     }

    //     console.log(kidInfoData);

    //     // //Updates the user profile 
    //     // API.updateProfile(userUpdatedData)
    //     //     .then(res => {
    //     //         window.location.reload();
    //     //     })
    //     //     .catch(err => console.log(err)); 
    // }

    componentDidMount() {
        // retrieves all the schools - filter by state 
        API.findAllKidsForAParent()
            .then(
                res => {
                    console.log("Kids for parent", res.data);
                    this.setState({
                        kids: res.data
                    })
                }
            )
            .catch(err => console.log(err));

        // retrieves all the schools - filter by state 
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
                        <div>
                            <FormButton
                                nameButton="Save Profile"
                                handleButtonClick={this.handleSaveButtonClick}
                            /> 
                        </div>
                    }
                   
                   { this.state.kids.length ? 
                        <div className="card ">
                            {/* Rendering Form labels using the kidInfo object values */}
                            <FormTitle
                            title="Update Kid(s) Info"
                        />
                            {this.state.kidInfo.map((kid, i) => {

                                return (
                                    <FormLabel
                                        key={i}
                                        data={i}
                                        for={kid.for}
                                        name={kid.for}
                                        label={kid.label}
                                        value={kid.value}
                                        handleChange={this.handleInputMemberChange}
                                    />
                                    
                                );
                            }
                            )}
                            <Dropdown
                                for="grade"
                                label="Choose which grade is your kid in?"
                            >
                                {this.state.gradeLevels.map((grade ,i) => {
                                    return (
                                        <OptionForDropdown option={grade}
                                            value={grade} 
                                            key={i} />
                                    )
                                })}
                            </Dropdown>
                            <Dropdown
                                for="schoolId"
                                label="Which school is your kid going to?"
                                handleChange={this.handleInputChangeKid}
                            >
                                {this.state.schools.map(school => {
                                    return (
                                        <OptionForDropdown
                                            option={school.name}
                                            value={school.id}
                                            key={school.id}
                                        />
                                    )
                                })}
                            </Dropdown>
                            <FormButton 
                                nameButton ="Save Member Info"
                                handleButtonClick={this.handleSaveNewKid}
                            />
                        </div>
                                : 
                           <div>
                           <h3>No Family Member(s) found
                           {/* <FormButton 
                                nameButton ="Add New Member"
                                handleButtonClick={this.handleAddNewMember}
                            /> */}
                            </h3>
                            </div>
                   }
                    
                  
                    {/* </FormAction> */}
                </FormContainer>
            </div>
        );
    }
}

export default MyProfile;