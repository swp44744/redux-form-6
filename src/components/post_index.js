import React, {Component} from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { fetchPost } from '../actions/index';
import { Link } from 'react-router';


class PostIndex extends Component {
  componentWillMount() {
     this.props.fetchPost();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <span className="pull-xs-right">{post.categories}</span>
          <strong>{post.title}</strong>
        </li>
      );

      });
  }

  render() {
    return(
      <div>
        MyBlogPost.com
        <div className="text-xs-right">
          <Link to="/post/new" className="btn btn-primary">Add a Post</Link>
        </div>
        <h3>Posts: </h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>

    );
  }
}

/*
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPost}, dispatch);
}
*/

// short cut is you dont have to mention mapDispatchToProps instead
// you can just call fetchPost within connect and it still works the same

function mapStateToProps(state) {
  return { posts : state.posts.all }
}


export default connect(mapStateToProps,{ fetchPost })(PostIndex);