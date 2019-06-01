import React, { Component } from "react"
import { FormAction, FormTitle, FormLabel, FormButton, Dropdown, OptionForDropdown } from "../form";
import API from "../../utils/API";
import gradeLevel from "../../gradeLevel.json"; 
import "./style.css";

class KidProfile extends Component {
    state = {
        disabled: true,
        kidInfo:
            [
                {
                    for: "name",
                    label: "Your kid's name",
                    value: this.props.name,
                },
                {
                    for: "grade",
                    label: "Your kid's grade",
                    value: this.props.grade,
                    options: gradeLevel
                },
                {
                    for: "school",
                    label: "Your kid's school",
                    value: this.props.school,
                    options: []
                }
            ], 
            kidId: this.props.kidId
    }

    handleInputChange = event => {
        const value = event.target.value;
        const key = event.target.getAttribute("data-id")
        let copy = [...this.state.kidInfo]
        copy[key].value = value
        this.setState({
            kidInfo: copy
        })
    }

    handleEditButtonClick = event => {
        event.preventDefault();
        this.setState({
            disabled: false
        })
    }

    handleUpdateButtonClick = event => {
        event.preventDefault()
        const kidUpdatedData = {
            name: this.state.kidInfo[0].value,
            gradeLevel: this.state.kidInfo[1].value,
            schoolId: this.state.kidInfo[2].value
        }

        console.log("Kid Details ", kidUpdatedData, "ID", this.state.kidId);

        //Updates the kid profile 
        API.updateKidForAParent(kidUpdatedData, this.state.kidId)
            .then(res => {
                console.log("Kid data - upd", res);
                window.location.reload();
            })
            .catch(err => console.log(err));
    }

    handleDeleteInfo = event => {
        event.preventDefault();
        console.log("Delete KID INFO");
        API.deleteKidForAParent(this.state.kidId)
            .then(res => {
                console.log("Kid deleted");
                window.location.reload();
            })
            .catch(err => console.log(err));
    }
    // Reloading the page to redirect to dashboard 
    handleReturnBack = event => {
        event.preventDefault();
        console.log("Kid Cancel button");
        // window.location.reload();
        this.setState({
            disabled: true
        })
         //Refreshing DATA for the Cancel Kid  
        console.log( "ID", this.state.kidId); 
    }

    componentDidMount() {
        // console.log("Grade", this.props.grade); 
        // console.log("Kid ID", this.props.kidId); 
        API.getAllSchools()
            .then(
                res => {
                    let copy = [...this.state.kidInfo]
                    copy[2].options = res.data
                    this.setState({
                        kidInfo: copy
                    })
                }
            )
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                {this.state.disabled ?
                    <FormTitle
                        title={`View ${this.props.name}'s Info`}
                        moreClass="kid-section-title"
                        icon="fas fa-eye"
                    />
                    :
                    <FormTitle
                        title={`Update ${this.props.name}'s Info`}
                        moreClass="kid-section-title"
                        icon="fas fa-edit"
                    />
                }
                <FormAction>
                    {this.state.kidInfo.map((info, i) => {
                        if (info.for === "name") {
                            return (
                                <FormLabel
                                    key={i}
                                    data={i}
                                    for={info.for}
                                    label={info.label}
                                    value={info.value}
                                    disabled={this.state.disabled}
                                    handleChange={this.handleInputChange}
                                />
                            )
                        }
                        else {
                            return (
                                <Dropdown
                                    key={i}
                                    data={i}
                                    for={info.for}
                                    label={info.label}
                                    value={info.value}
                                    disabled={this.state.disabled}
                                    handleChange={this.handleInputChange}
                                >
                                    {info.options.map((item, j) => {
                                        return (
                                            <OptionForDropdown
                                                option={item.name}
                                                value={item.id}
                                                // selected value={kid.schoolId}
                                                key={j}
                                            />
                                        )
                                    })}
                                </Dropdown>
                            )
                        }

                    })}

                    {this.state.disabled ? (
                        <FormButton
                            nameButton={`Edit ${this.props.name}'s info`}
                            handleButtonClick={this.handleEditButtonClick}
                            moreClass="btn-edit mb-4"
                            icon="far fa-edit"
                        />
                    ) :
                        (
                            <div>
                                <FormButton
                                    nameButton={`Update ${this.props.name}'s info`}
                                    moreClass="btn-success mr-2 mb-4"
                                    icon="far fa-save"
                                    handleButtonClick={this.handleUpdateButtonClick}
                                />
                                <FormButton
                                    nameButton={`Remove ${this.props.name}'s info`}
                                    moreClass="btn-warning mr-2 mb-4"
                                    icon="fas fa-eraser"
                                    handleButtonClick={this.handleDeleteInfo}
                                />
                                 <FormButton
                                    nameButton="Cancel"
                                    moreClass="btn-secondary mr-2 mb-4"
                                    handleButtonClick={this.handleReturnBack}
                                    disabled={this.state.disabled}
                                    icon="fas fa-backspace"
                                />
                            </div>
                        )}
                </FormAction>
            </div>
        )
    }
}

export default KidProfile;