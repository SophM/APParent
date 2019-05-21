// import all the dependencies
import React, { Component } from "react";
import { FormAction, FormLabel, FormButton, FormMessage, Dropdown, OptionForDropdown } from "../form";
import ErrorMessage from "../errorMessage";
import "./style.css";
import API from "../../utils/API";

const statesList = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];

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
                {
                    for: "state",
                    label: "Which state do you live in?",
                    value: "Alabama",
                    options: statesList
                }
            ],
        numberOfKid: 1,
        allKidInfo: [],
        kidInfo:
            [
                {
                    name: "",
                    grade: 1,
                    schoolId: 1
                }
            ],
        schools: [],
        gradeLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        formMessage:
        {
            message: "Already Have An Account?",
            action: "Login",
            alt: "login"
        },
        hasError: false,
        addKid: false
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

    handleContinueButtonClick = event => {
        event.preventDefault();

        if (this.state.parentInfo[0].value && this.state.parentInfo[1].value && this.state.parentInfo[2].value && this.state.parentInfo[3].value && this.state.parentInfo[4].value && this.state.parentInfo[5].value) {

            this.setState({
                firstStepRegistration: false
            });
            console.log("parent info: ", this.state.parentInfo);

        } else {

            this.setState({
                hasError: true
            })
        }
    }

    handleInputChangeKid = event => {
        // const value = event.target.value;
        const { name, value } = event.target;

        // this.state.kidInfoTemp.push(event.target.value);
        // this.state.kidInfo.push(event.target.value);

        const copy = [...this.state.kidInfo];

        copy[0][name] = value;

        this.setState({
            kidInfo: copy
        })

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

        console.log("all kid info: ", this.state.allKidInfo);
        console.log("number of kids: ", this.state.numberOfKid)

        // if (this.state.kidInfo[0].name && this.state.kidInfo[0].grade && this.state.kidInfo[0].schoolId) {

        //   
        console.log("kidInfo: ", this.state.kidInfo);

        //     API.signup(
        //         {
        //             userName: this.state.parentInfo[0].value,
        //             password: this.state.parentInfo[1].value,
        //             email: this.state.parentInfo[2].value,
        //             photoLink: this.state.parentInfo[3].value,
        //             city: this.state.parentInfo[4].value,
        //             state: this.state.parentState,
        //             kidName: this.state.kidInfo[0].name,
        //             grade: this.state.kidInfo[0].grade,
        //             schoolId: this.state.kidInfo[0].schoolId
        //         }
        //     )
        //     .then(res => {
        //         if (res.data.status === "success") {
        //             window.location.reload()
        //         }
        //         else if (res.data.status === "unsuccessful"){
        //             this.setState(
        //                 { hasError: true }
        //             )
        //         }

        //     })
        //     .catch(err => console.log(err))

        // } else {

        //     this.setState({ 
        //         hasError: true
        //     })
        // }
    }

    handleCloseButtonClick = event => {
        event.preventDefault();

        this.setState({
            hasError: false
        })
    }

    handleAddKidButtonClick = event => {
        event.preventDefault();

        console.log("kid info: ", this.state.kidInfo);

        this.state.allKidInfo.push(this.state.kidInfo[0]);

        this.setState({
            numberOfKid: this.state.numberOfKid + 1,
            addKid: true
        });

    }

    resetError = () => {
        if (this.state.hasError) {
            setTimeout(() => {
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
                                if (parentInfo.for !== "state") {
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
                                } else {
                                    return (
                                        <Dropdown
                                            key={i}
                                            data={i}
                                            for={parentInfo.for}
                                            label={parentInfo.label}
                                            value={parentInfo.value}
                                            handleChange={this.handleInputChangeParent}
                                        >
                                        {parentInfo.options.map((state, j) => {
                                            return (
                                                <OptionForDropdown option={state} value={state} key={j} />
                                            )
                                        })}
                                        </Dropdown>
                                    );  
                                }
                            })}
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
                                {(!this.state.addKid) ? (
                                    <div>
                                        <div className="font-weight-bold mb-2">Information for kid #1</div>
                                        <FormLabel
                                            for="name"
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
                                    </div>
                                ) : (
                                        <div>
                                            <div className="font-weight-bold mb-2">Information for kid #{this.state.numberOfKid}</div>
                                            <FormLabel
                                                for="name"
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
                                        </div>
                                    )}
                                {/* <div className="font-weight-bold mb-2">Information for kid #1</div>
                            <FormLabel 
                                for="name"
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
                            </Dropdown> */}
                            </FormAction>
                            <FormButton
                                nameButton="I have another kid!"
                                handleButtonClick={this.handleAddKidButtonClick}
                            />
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