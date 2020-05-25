import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../redux/actions/PostActions";

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title: this.state.title,
      body: this.state.body,
    };
    //call action
    this.props.addPost(newPost);
  };
  render() {
    return (
      <div className="form-wrapper">
        <h2>ADD POST</h2>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="title">Title: </label>
            <br />
            <input
              type="text"
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="body">Content: </label>
            <br />
            <textarea
              type="text"
              id="body"
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
              rows="4"
              cols="50"
            />
          </div>
          <button type="submit">Post</button>
        </form>
      </div>
    );
  }
}

AddPost.propType = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(AddPost);
