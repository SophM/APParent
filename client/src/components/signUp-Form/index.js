// import all the dependencies
import React, { Component } from "react";
import { FormLabel, FormButton, Dropdown, OptionForDropdown } from "../form";
import "./style.css";


// define a class SignUp to create the component
class SignUp extends Component {
    
    state = {
        labelsParents: ["Enter a username", "Enter a password", "Enter an email", "Which city do you live in?", "Which state do you live in?"],
        inputPlaceholder: [],
        schools: [],
        gradeLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        nameButton: "Continue",
    };


    render() {
        return (
            <div>
                <FormLabel />

            </div>
        );
    }

}


// export the component so it can be used by other files
export default SignUp;