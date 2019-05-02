import React from "react"; 

function userCard(props) { 

    return (
        <div>
            <div className="card mb-3">
                <img className="card-img-top" src={props.thumbnail} className="card-img" alt={props.title} style={{ width: "200px" }} />
            <div className="col-md-8">
                <div className="card-body">
                    <h4 class="card-title">{props.userName}</h4>
                    <p className="card-text">Email: {props.email}</p>
                </div>
                <a href="#" target="_blank" className="btn round btn-primary" role="button">See Profile</a>
            </div>
        </div>
        </div>
    );
}

export default userCard; 