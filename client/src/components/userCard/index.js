import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";


class userCard extends Component {
    //Setting all default values 
  state = {
    schools: [],
    kids: [],
  }
    componentDidMount() {
        // retrieves all the kids for the logged in parent... 
        console.log("Parent ID: ", this.props.parentId);
        API.findAllKids(this.props.parentId)
            .then(
                res => {
                    console.log("Kids for parent", res.data);
                    this.setState({
                        kids: res.data
                    })
                }
            )
            .catch(err => console.log(err));

        // // retrieves all the schools - filter by state 
        // API.getAllSchools()
        //     .then(
        //         res => {
        //             console.log(res.data);
        //             this.setState({
        //                 schools: res.data
        //             })
        //         }
        //     )
        //     .catch(err => console.log(err));
    }

    render() {
        return (

            <div className="card" style={{ width: "20rem" }}>
                <img src={this.props.photoLink ? (this.props.photoLink) : ("http://lorempixel.com/125/125/people/2/cc")} className="card-img-top userImg" alt={this.props.userName} />
                <div className="card-body">
                    <h2 className="card-title text-info">{this.props.userName}</h2>
                    <h5 className="card-text"><b>Email:</b> {this.props.email}</h5>
                    <h5 className="card-text"><b>City:</b> {this.props.city}</h5>
                    <h5 className="card-text"><b>State :</b> {this.props.state}</h5>
                    <h4 className="card-body text-info">Kid Info: </h4>
                    {/* <h5 className="card-text"><b>No of Kids:</b> {this.state.kids.length}</h5> */}
                    <h5 className="card-text"><b>Grade Range:</b>
                        {this.state.kids.length ? (
                            this.state.kids.map((kid, i) => {
                                return (
                                    <div className="grades">
                                        {kid.gradeLevel}</div>
                                );
                            })) : (<div>Infant - Preschooler</div>)

                        }</h5>
                     <h5 className="card-text"><b>School(s):</b>
                        {this.state.kids.length ? (
                            this.state.kids.map((kid, i) => {
                                return (
                                    <div className="grades">
                                        {kid.gradeLevel}</div>
                                );
                            })) : (<div>Infant - Preschooler</div>)

                        }</h5>
                    <button className="btn btn-success btn-lg mt-1">Chat</button>
                </div>
            </div>

        )
    }
}

export default userCard;