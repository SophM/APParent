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
                <p id="filter-text" className="font-weight-bold">Filters: </p>
                <FormButton 
                    nameButton="Event"
                    moreClass="event-btn p-1 ml-1 mr-1"
                    icon="fas fa-calendar-alt"
                    handleButtonClick={this.handleFilterButtonClick}
                />
                <FormButton 
                    nameButton="Advice"
                    moreClass="advice-btn p-1 ml-1 mr-1"
                    icon="fas fa-info-circle"
                    handleButtonClick={this.handleFilterButtonClick}
                />
                <FormButton 
                    nameButton="Free"
                    moreClass="free-btn p-1 ml-1 mr-1"
                    icon="fas fa-gift"
                    handleButtonClick={this.handleFilterButtonClick}
                />
                <FormButton 
                    nameButton="On Sale"
                    moreClass="onSale-btn p-1 ml-1 mr-1"
                    icon="fas fa-dollar-sign"
                    handleButtonClick={this.handleFilterButtonClick}
                />
                <FormButton 
                    nameButton="Question"
                    moreClass="question-btn p-1 ml-1 mr-1"
                    icon="fas fa-question-circle"
                    handleButtonClick={this.handleFilterButtonClick}
                />
                <FormButton 
                    nameButton="Recent first"
                    moreClass="recent-btn p-1 ml-1 mr-1"
                    icon="fas fa-arrow-circle-up"
                    handleButtonClick={this.handleFilterButtonClick}
                />
                <FormButton 
                    nameButton="Old first"
                    moreClass="old-btn p-1 ml-1 mr-1"
                    icon="fas fa-arrow-circle-down"
                    handleButtonClick={this.handleFilterButtonClick}
                />
            </div>
        )
    }

}

// export the component so it can be used by other files
export default FilterPosts;