import React, { Component} from 'react';
import { Dropdown, OptionForDropdown} from "../form"; 
import API from "../../utils/API";

const statesList = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];

class FilterBy extends Component {
  //State 
  state = {
    allStates: statesList,  
    schools: [], 
    filterState: "California"
  }

  componentDidMount() {
    // console.log("All States", this.state.allStates); 
    
    // retrieves all the schools - filter by state 
    API.getAllSchoolsByState(this.state.filterState)
    .then(
        res => {
            console.log(res.data);
            this.setState({
                schools: res.data
            })
        }
    )
    .catch(err => console.log(err));

    console.log("Schools", this.state.schools); 
  }
  //Criteria 
  handleSearch(event) {
    this.props.searchStates(event.target.value)
  }

  render() {
    
    return (
      <div className="container">
        <form noValidate>
          <p className="mb-1 text-center text-info">Refine your results</p>
          <div className="columns text-center">
            <div className="column col-6 col-xs-12">
              <div className="form-group">
                <div className="col-3 col-sm-12">
                  <label className="form-label" htmlFor="states">
                    States
                  </label>
                </div>
                <div className="col-9 col-sm-12">
                  <select className="form-select" id="states">
                    <option value="">Choose...</option>
                    {this.state.allStates.map((item) =>
                      <option key={item}>{item}</option>
                    )}
                  </select>
                </div>
              </div>
            </div>
            <div className="column col-6 col-xs-12">
              <div className="form-group">
                <div className="col-3 col-sm-12">
                  <label className="form-label" htmlFor="schools">
                    Schools
                  </label>
                </div>
                <div className="col-9 col-sm-12">
                  <select className="form-select" id="states">
                    <option value="">Choose...</option>
                    {/* {this.state.schools.map((item, j) =>

                      <option key={item}>{item}</option>
                    )} */}
                  </select>
                </div>
              </div>
            </div>
            <div>
              <button className="btn-info"> Search</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default FilterBy;