import React, { Component} from 'react';
import API from "../../utils/API";
import gradeLevel from "../../gradeLevel.json"

class FilterBy extends Component {
  //State 
  state = {
    gradeLevels: '',
    states: [], 
    schools: []
  }

//   // Dynamically create select list
// let options = [];
// countryArray.map(item =>
//   options.push({ label: item.name.label, value: item.name.value }),
// );


  componentDidMount() {
    // retrieves all the schools
    API.getAllSchools()
        .then(
            res => {
                console.log(res.data);
                let copy = [...this.state.schools];
                copy[2].options = res.data;
                this.setState({
                    schools: copy
                })
            }
        )
        .catch(err => console.log(err));
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
                    <option options={this.state.gradeLevels} value="">Choose...</option>
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
                  <select className="form-select" id="schools">
                    <option value="">Choose...</option>
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