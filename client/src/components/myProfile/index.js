//This component is for Edit or View my Profile 

//
import React,{Component} from "react";
import { FormContainer, FormTitle, FormLabel, InputText, Dropdown, OptionForDropdown, FormButton, FormAction } from "../form";
import API from "../../utils/API";

class MyProfile extends Component {

    state = {
       
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
    }

    render() {
        return(
        <div>
            <FormContainer>
                {/* <FormAction 
                    route={props.route} > */}

                <FormTitle
                    title="View My Profile"
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