import React from "react";
import {FormContainer, FormTitle, FormLabel, InputText, Dropdown, OptionForDropdown, FormButton} from "../form";

const categories = ["Event", "Advice", "Free", "On sale", "Question"];

function WritePost() {

    return (
        <div>
            <FormContainer>
                <FormTitle 
                    title = "Write a post"
                />
                <Dropdown
                    for="category"
                    label="Choose a category for your post"
                >
                    {categories.map(category => {
                        return (
                            <OptionForDropdown option={category}/>
                        ) 
                    })}
                </Dropdown>
                <FormLabel 
                    for="Title"
                />
                <InputText 
                    for="Message"
                />
                <FormButton 
                    nameButton="Post"
                />
            </FormContainer>
        </div> 
    );
}

export default WritePost;