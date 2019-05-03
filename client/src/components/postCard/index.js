import React from "react";
import "./style.css";

function PostCard(props) {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col">
          <div className="card-body">
            <h1 className="card-title">{props.title}</h1>
            <p className="category">Category: {props.category}</p>
            <p className="card-text">Post By: {props.name}</p>
            <p className="card-text">{props.description}</p>
          </div>
          <button className="btn btn-primary btn-lg float-right m-3 mr-5">
            Comment
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
