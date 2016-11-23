import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import DeletePost from './delete_post';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class PostItem extends Component {
  render() {
    return (
      <div>
        {
          this.props.posts.map((post) => {
            return (
              <div key={post.id}>
                <Row>
                  <Col xs={10}>
                    <li className="list-group-item" >
                      <Link to={"posts/" + post.id}>
                        <span className="pull-xs-right">{post.categories}</span>
                        <strong>{post.title}</strong>
                      </Link>
                    </li>

                  </Col>
                  <Col xs={2}>
                    <DeletePost id={post.id} />
                  </Col>
                </Row>
              </div>
            );
          })
        }
      </div>
      );
  }
}



function mapStateToProps(state) {
  return { posts : state.posts.all }
}



export default connect(mapStateToProps,null)(PostItem);