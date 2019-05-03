import React from "react";
import "./style.css";

function PostCard(props) {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col">
          <img
            src={"https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj_rq_txv7hAhWIqp4KHUuIDKAQjRx6BAgBEAU&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973461%2F&psig=AOvVaw3WsI0NmXFbv68Nh1_KaueP&ust=1556945164739345"}
            className="card-img"
            alt="blank"
            style={{ width: "200px" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">TITLE{/* {props.title} */}</h5>
            <p className="card-text">Post By: NAME{/* {props.name} */}</p>
            <p className="card-text">Desc: BLAH BLAH BLAH{/* {props.description} */}</p>
          </div>
          <a
            href={"www.google.com"}
            target="_blank"
            className="btn btn-primary"
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
