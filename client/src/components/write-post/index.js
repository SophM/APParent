import React from "react";
import FormContainer from "../form";
import FormTitle from "../form";
import FormLabel from "../form";
import FormButton from "../form";

function WritePost() {
    return (
        <div>
            <FormContainer>
                <FormTitle 
                    title = "Write a post"
                />
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