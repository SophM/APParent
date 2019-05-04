//
import React,{Component} from "react";
import { FormContainer, FormTitle, FormLabel, InputText, Dropdown, OptionForDropdown, FormButton, FormAction } from "../form";
import API from "../../utils/API";

//Declaring all categories for the Post 
const categories = ["Event", "Advice", "Free", "On sale", "Question"];

class WritePost extends Component {

    state = {
        title: "",
        description: "",
        category: "Event"
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
        console.log("title: " , this.state.title, "description:" ,this.state.description,
        "category:",  this.state.category)
        API.createPost(
            {
                title: this.state.title,
                description: this.state.description,
                category: this.state.category
            }
        ).then(() => {
            //redirect to dashboard
            this.props.handleCreatePost()
            console.log("inside API calls")
        })
    }

    render() {
        return(
        <div>
            <FormContainer>
                {/* <FormAction 
                    route={props.route} > */}

                <FormTitle
                    title="Write a post"
                />
                <Dropdown
                    for="category"
                    label="Choose a category for your post"
                    handleChange={this.handleInputChange}
                    value={this.state.category}
                >
                    {categories.map((category, i) => {
                        return (
                            <OptionForDropdown option={category} key={i} />
                        )
                    })}
                </Dropdown>
                <FormLabel
                    for="title"
                    handleChange={this.handleInputChange}
                />
                <InputText
                    for="description"
                    handleChange={this.handleInputChange}
                />
                <FormButton
                    nameButton="Post"
                    handleButtonClick={this.handleButtonClick}
                />
                {/* </FormAction> */}
            </FormContainer>
        </div>
        );
    }
}

export default WritePost;