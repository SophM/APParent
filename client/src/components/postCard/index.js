import React from "react";
import "./style.css";

function PostCard(props) {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col">
          <span className="category">Category: {props.category}</span>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              {props.title}
            </h5>
            <p className="card-text">Post By: {props.name}</p>
            <p className="card-text">Desc: {props.description}</p>
          </div>
          <a
            href={"#"}
            target="_blank"
            className="btn btn-primary btn-sm"
            role="button"
          >
            Comment
          </a>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
