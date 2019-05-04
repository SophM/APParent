import React from "react";
import { InputText, FormContainer } from "../form";
import "./style.css";

function PostCard(props) {
  return (
    <div>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col">
            <div className="card-body">
              <h1 className="card-title">{props.title}</h1>
              <p className="category">Category: {props.category}</p>
              <p className="card-text">Post By: {props.name}</p>
              <p className="card-text">{props.description}</p>
            </div>
            <button
              className="btn btn-primary btn-lg float-right m-3 mr-5"
              id="comment"
              data-toggle="modal"
              data-target="#exampleModalLong"
              onClick="id01"
            >
              Comment
            </button>
          </div>
        </div>
      </div>

      {/* modal */}
      <div
        className="modal fade"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              {props.title}
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <FormContainer>
                <InputText for="comment" />
              </FormContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
