import React from "react";
import "./style.css";

function userCard(props) {

    return (
    
        <div className="card" style={{ width: "18rem" }}>
            {/* <img src="http://lorempixel.com/125/125/people/2/cc" className="card-img-top" alt={props.userName} /> */}
            <img src={props.photoLink} className="card-img-top userImg" alt={props.userName} />
            <div className="card-body">
                <h2 className="card-title">{props.userName}</h2>
                <h5 className="card-text">Email: {props.email}</h5>
                <h5 className="card-text">City: {props.city}</h5>
                <h5 className="card-text">State : {props.state}</h5>
                <button className="btn btn-primary btn-lg mt-1">Chat</button>
            </div>
        </div>

    );
}

export default userCard;