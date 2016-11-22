import React, {Component} from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { fetchPost } from '../actions/index';
import { Link } from 'react-router';


class PostIndex extends Component {
  componentWillMount() {
     this.props.fetchPost();
  }

  render() {
    return(
      <div>
        List of posts
        <div className="text-xs-right">
          <Link to="/post/new" className="btn btn-primary">Add a Post</Link>
        </div>
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