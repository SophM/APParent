import React from "react";
import "./style.css";

function PostCard(props) {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col">
          <img
            src={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973461_960_720.png"
            }
            className="card-img"
            alt="blank"
            style={{ width: "200px" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              Child Abduction {props.title}
            </h5>
            <p className="card-text">Post By: John Doe {props.name}</p>
            <p className="card-text">
              Desc: Mum's child abduction warning after son escapes man who
              tries to pull him into van on school walk
              {props.description}
            </p>
          </div>
          <a
            href={"/dashboard"}
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
