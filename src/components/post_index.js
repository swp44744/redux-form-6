import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';
import { Link } from 'react-router';
import PostItem from './post_item';


class PostIndex extends Component {
  componentWillMount() {
     this.props.fetchPost();
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
          <PostItem />
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




export default connect(null,{ fetchPost })(PostIndex);