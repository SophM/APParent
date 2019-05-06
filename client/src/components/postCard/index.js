// make component a statefull component
import React, { Component } from "react";
import {
  InputText,
  FormContainer,
  CommentDisplay,
  CommentSubmitButton
} from "../form";
import API from "../../utils/API";
import "./style.css";

// make a api call to get all comment posts

class PostCard extends Component {
  // make a state for the values in this component
  state = {
    nameButton: "Comment",
    description: "",
    comments: {},
  };

  componentDidMount() {
    // const requestParams = {
    //     id: this.props.postId,
    //   }
    // console.log("requestParams: " + requestParams.id)

    // API.findAllForPost(requestParams)
    //   .then(
    //     res =>
    //       this.setState({
    //         comments: res.data
    //       })
    //   )
    //   .catch(err => console.log(err));

    //   console.log("comments: " + this.state.comments)

  }

  // write letters on the posting field while typed
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleCommentClick = event => {
    event.preventDefault();

    const requestParams = {
      id: this.props.postId,
    }

    console.log("requestParams: " + requestParams.id)

    API.findAllForPost(requestParams)
      .then(
        res => {
          console.log("result.data: ", res.data[0]);
          this.setState({
            comments: res.data
          })

        }  
      )
      .catch(err => console.log(err));
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(`Description: ${this.state.description}`);
    // need to post to MySQL here

    const commentData = {
      description: this.state.description,
      postId: this.props.postId
    }

    API.createComment(commentData)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err));
    this.setState({ description: "" });
  };
  
  renderComments() {
  //  {this.state.comments.map((comment) => {
  //     return <CommentDisplay />
  //   })}
  }

  render() {
    return (
      <div>
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col">
              <div className="card-body">
                <h1 className="card-title">{this.props.title}</h1>
                <p className="category">
                  Category: {this.props.category}
                </p>
                <p className="card-text">
                  Post By: {this.props.name}
                </p>
                <p className="card-text">
                  {this.props.description}
                </p>
              </div>
              <button
                className="btn btn-primary btn-lg float-right m-3 mr-5"
                id="comment"
                data-toggle="modal"
                data-target="#exampleModalLong"
                onClick={this.handleCommentClick}
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
                {this.props.title}
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
                {/* create another component for displaying */}
                {/* {this.renderComments()} */}
                <p>Your Comment: {this.state.description}</p>

                <input
                  for="comment"
                  label="Comment Here"
                  type="text"
                  placeholder="Description"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                />

                {/* <CommentSubmitButton nameButton={this.state.nameButton} /> */}
                <button onClick={this.handleFormSubmit}>Submit</button>

                {/* need a button to post */}
                {/* create a handle click for the button - that will post to MySQL */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostCard;
