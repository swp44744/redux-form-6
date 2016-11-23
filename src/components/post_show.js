import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSinglePost } from '../actions/index';
import { Link } from 'react-router';
import DeletePost from './delete_post';

class PostsShow extends Component {
  componentWillMount() {
    this.props.fetchSinglePost(this.props.params.id)
  }
  render() {
    if (!this.props.post) {
      return(
        <div>Waiting...!</div>
      );
    }
    return (
      <div>
        <Link to ="/">Back to Index</Link>
        <DeletePost id={this.props.post.id}/>
        <h3>Title: {this.props.post.title}</h3>
        <h6>Categories: {this.props.post.categories}</h6>
        <br />
        <p>Title: {this.props.post.content}</p>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return{
    post: state.posts.post

  };
}

export default connect(mapStateToProps, { fetchSinglePost })(PostsShow);