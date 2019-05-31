// import all the dependencies
import React, { Component } from "react";
import { FormButton } from "../form";
import "./style.css";
import API from "../../utils/API";

// define a class FilterPosts to create the component
class FilterPosts extends Component {

    state = {

    }

    render() {
        return(
            <div className="mb-3">
                <p id="filter-text" className="font-weight-bold">Filter the posts: </p>
                <FormButton 
                    nameButton="Event"
                    moreClass="event-btn"
                    icon="fas fa-calendar-alt"
                    handleButtonClick={this.handleFilterButtonClick}
                />
                <FormButton 
                    nameButton="Advice"
                    moreClass="advice-btn"
                    icon="fas fa-info-circle"
                    handleButtonClick={this.handleFilterButtonClick}
                />
                <FormButton 
                    nameButton="Free"
                    moreClass="free-btn"
                    icon="fas fa-gift"
                    handleButtonClick={this.handleFilterButtonClick}
                />
                <FormButton 
                    nameButton="On Sale"
                    moreClass="onSale-btn"
                    icon="fas fa-dollar-sign"
                    handleButtonClick={this.handleFilterButtonClick}
                />
                <FormButton 
                    nameButton="Question"
                    moreClass="question-btn"
                    icon="fas fa-question-circle"
                    handleButtonClick={this.handleFilterButtonClick}
                />
                <FormButton 
                    nameButton="Most Recent"
                    moreClass="recent-btn"
                    icon="fas fa-arrow-circle-up"
                    handleButtonClick={this.handleFilterButtonClick}
                />
                <FormButton 
                    nameButton="Oldest"
                    moreClass="old-btn"
                    icon="fas fa-arrow-circle-down"
                    handleButtonClick={this.handleFilterButtonClick}
                />
            </div>
        )
    }

}

// export the component so it can be used by other files
export default FilterPosts;