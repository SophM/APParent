import React from "react";
import {FormContainer, FormTitle, FormLabel, InputText, Dropdown, OptionForDropdown, FormButton, FormAction} from "../form";

const categories = ["Event", "Advice", "Free", "On sale", "Question"];

function WritePost(props) {

    return (
        <div>
            <FormContainer>
                {/* <FormAction 
                    route={props.route} > */}

                    <FormTitle 
                        title = "Write a post"
                    />
                    <Dropdown
                        for="category"
                        label="Choose a category for your post"
                    >
                        {categories.map((category,i) => {
                            return (
                                <OptionForDropdown option={category} key={i} />
                            ) 
                        })}
                    </Dropdown>
                    <FormLabel 
                        for="title"
                    />
                    <InputText 
                        for="description"
                    />
                    <FormButton 
                        nameButton="Post"
                        handleCreatePost={props.handleCreatePost}
                    />
                {/* </FormAction> */}
            </FormContainer>
        </div> 
    );
}

export default WritePost;