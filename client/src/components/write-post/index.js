import React from "react";
import {FormContainer, FormTitle, FormLabel, Dropdown, OptionForDropdown, FormButton} from "../form";

const postCategories = ["Event", "Offer", "Advice", "On Sale", "Random", "In search of"]

function WritePost() {
    return (
        <div>
            <FormContainer>
                <FormTitle 
                    title = "Write a post"
                />
                <Dropdown 
                    for="Category" 
                    label="Choose a category for your post"
                > 
                    {postCategories.map(category => {
                        return (
                            <OptionForDropdown 
                                option={category}
                            />
                        )
                    })}   
                </Dropdown>
                <FormLabel 
                    for="Title"
                />
                <FormLabel 
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