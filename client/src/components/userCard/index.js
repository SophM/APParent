import React from "react";

function userCard(props) {

    return (
        // <div className="card mb-3">
        //     <div className="row no-gutters">
        //         <div className="col">
        //             <div className="card-body">
        //                 <img className="img-thumbnail img-fluid" src="http://lorempixel.com/600/500/people" //{props.thumbnail} 
        //                     alt={props.userName} style={{ width: "150px", float: "left" }} />

        //                 <div className="card-body float-left text-left pt-1">
        //                     <h2 class="card-title">{props.userName}</h2>
        //                     <h4 className="card-text">Email: {props.email}</h4>
        //                     <h4 className="card-text">City: {props.city} | State : {props.state}</h4>
        //                 </div>

        //                 <button className="btn btn-primary btn-lg float-right mt-5 mr-5">
        //                     Chat
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </div>




        <div className="card" style={{ width: "18rem" }}>
            <img src="http://lorempixel.com/600/500/people" className="card-img-top" alt={props.userName} />
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