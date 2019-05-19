// import all the dependencies
import React, { Component } from "react";
import { FormAction, FormLabel, FormButton, FormMessage, Dropdown, OptionForDropdown } from "../form";
import ErrorMessage from "../errorMessage"
import "./style.css";
import API from "../../utils/API";

// define a class SignUp to create the component
class SignUp extends Component {
    
    state = {
        firstStepRegistration: true,
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
                    for: "photo",
                    label: "Enter a link for your profile picture",
                    placeholder: "https://www.picture-of-me.png",
                    value: ""
                },
                {
                    for: "city",
                    label: "Which city do you live in?",
                    placeholder: "city",
                    value: "",
                },
            ],
        parentState: "CA",
        // kidInfoTemp: [],
        kidInfo: [],
        schools: [],
        gradeLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
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

    handleInputChangeParent = event => {
        const value = event.target.value;
        const key = event.target.getAttribute("data-id")
        let copy = [...this.state.parentInfo]
        copy[key].value = value
        this.setState({
            parentInfo: copy
        });
    }

    handleInputChangeParentState = event => {
        this.setState({
            parentState: event.target.value
        })
    }

    handleContinueButtonClick = event => {
        event.preventDefault();

        if (this.state.parentInfo[0].value && this.state.parentInfo[1].value && this.state.parentInfo[2].value && this.state.parentInfo[3].value && this.state.parentInfo[4].value) {
            
            this.setState({
                firstStepRegistration: false
            });
            console.log("parent info: ", this.state.parentInfo);
            console.log("parentState:", this.state.parentState);

        } else {

            this.setState({ 
                hasError: true
            })
        }
    }

    handleInputChangeKid = event => {
        // const value = event.target.value;
        // const { name, value } = event.target;

        // this.state.kidInfoTemp.push(event.target.value);
        this.state.kidInfo.push(event.target.value);

        // const copy = [...this.state.kidInfo];

        // copy.push({
        //     name: this.state.kidInfoTemp[0],
        //     grade: this.state.kidInfoTemp[1],
        //     schoolId: this.state.kidInfoTemp[2]
        // })

        // this.setState({
        //     kidInfo:
        //         [
        //             {   
        //                 name: this.state.kidInfoTemp[0],
        //                 grade: this.state.kidInfoTemp[1],
        //                 schoolId: this.state.kidInfoTemp[2]
        //             }
        //         ]
        // });
  
    }

    handleSignUpButtonClick = event => {
        event.preventDefault();

        if (this.state.kidInfo[0] && this.state.kidInfo[1] && this.state.kidInfo[2]) {
            
            // this.setState({
            //     firstStepRegistration: true
            // });
            // console.log("kidInfoTemp: ", this.state.kidInfoTemp);
            console.log("kidInfo: ", this.state.kidInfo);

        } else {

            this.setState({ 
                hasError: true
            })
        }
    }

    handleCloseButtonClick = event => {
        event.preventDefault();

        this.setState({
            hasError: false
        })
    }

    resetError = () => {
        if(this.state.hasError){
            setTimeout(()=>{
                this.setState({
                    hasError: false
                })
            }, 2000)
        }
    }


    render() {
        this.resetError();
        return (
            <div>
                {(this.state.firstStepRegistration) ? (
                    <div>
                       {(this.state.hasError) ? (
                            <ErrorMessage
                                message="Please fill up all the fields!"
                                handleCloseButtonClick={this.handleCloseButtonClick}
                            />
                        ) : (
                            ""
                        )}
                        <FormAction>
                            {this.state.parentInfo.map((parentInfo, i) => {

                                return (
                                    <FormLabel
                                        key={i}
                                        data={i}
                                        for={parentInfo.for}
                                        label={parentInfo.label}
                                        placeholder={parentInfo.placeholder}
                                        value={parentInfo.value}
                                        handleChange={this.handleInputChangeParent}
                                    />
                                );
                            })}
                            <div className="form-group text-left">
                                <label for="state">Which state do you live in?</label>
                                <select class="form-control bfh-states" id="state" name="state" data-country="US" data-state="CA" onChange={this.handleInputChangeParentState}></select>
                            </div>
                        </FormAction>
                        <FormButton
                            nameButton="Continue"
                            handleButtonClick={this.handleContinueButtonClick}
                        />
                    </div>
                ) : (
                    <div>
                        {(this.state.hasError) ? (
                            <ErrorMessage
                                message="Please fill up all the fields!"
                                handleCloseButtonClick={this.handleCloseButtonClick}
                            />
                        ) : (
                            ""
                        )}
                        <FormAction>
                        <FormLabel 
                            for="kidName"
                            label="What's the name of your kid?"
                            handleChange={this.handleInputChangeKid}
                        />
                        <Dropdown
                            for="grade"
                            label="Which grade is your kid in?"
                            handleChange={this.handleInputChangeKid}
                        >
                        {this.state.gradeLevels.map((grade, i) => {
                            return (
                                <OptionForDropdown option={grade} value={grade} key={i} />
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
                        </FormAction>
                        <FormButton
                            nameButton="Sign Up"
                            handleButtonClick={this.handleSignUpButtonClick}
                        />
                    </div>
                )}
                
                <FormMessage
                    message={this.state.formMessage.message}
                    path={this.props.path}
                    action={this.state.formMessage.action}
                    id={this.state.formMessage.alt}
                />
            </div>
        );
    }

}


// export the component so it can be used by other files
export default SignUp;