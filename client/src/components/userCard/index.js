import React from "react"; 

function userCard(props) { 

    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col">
                    <img className="card-img-top" src="http://lorempixel.com/600/500/people" //{props.thumbnail} 
                        alt={props.title} style={{ width: "300px" }} />
                </div>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h4 class="card-title">Mr. Snuggles {props.userName}</h4>
                    <p className="card-text">Email: snuggles@apparent.com {props.email}</p>
                </div>
                <a href="#" target="_blank" className="btn round btn-primary" role="button">See Profile</a>
            </div>
        </div> 
    );
}

export default userCard; 