import React, { Component } from "react";
import PostItem from "./PostItem";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../redux/actions/PostActions";

class Post extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  render() {
    const { posts } = this.props;
    return (
      <div>
        <h2>POSTS</h2>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

//to say that it is required
//fetchPost is an propery that is function
Post.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object,
};

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item,
});

export default connect(mapStateToProps, { fetchPosts })(Post);
