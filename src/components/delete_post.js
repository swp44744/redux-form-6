import React, { Component,PropTypes } from 'react';
import { deletePost, fetchPost } from '../actions/index';
import { connect } from 'react-redux';

class DeletePost extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  onDeleteClick(){
    this.props.deletePost(this.props.id)
      .then(() => {
        this.props.fetchPost();
        this.context.router.push('/');
      });
  }

  render() {
    return(
      <div>
        <button type="button" className="btn btn-danger" aria-label="Left Align" onClick={this.onDeleteClick.bind(this)}>
          <i
            className="fa fa-minus-circle"></i>
        </button>
      </div>
    );
  }
}

export default connect (null,{ deletePost, fetchPost})(DeletePost);