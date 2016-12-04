import React,{ Component } from 'react';
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import validate from './validate';
import { createForm, productAttributes } from '../actions/index';
import  Circle  from './circle';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import calculatePercentage from '../util/calculatePercentage';
import { renderField, renderHobbies } from '../util/renderFields';
import { bindActionCreators } from 'redux';


class RenderVariations extends Component {

  render() {
    return(
      <div>
        <Row>
          <Col md={12}>
            <br />
            <Field name="attributes" component="select">
              <option></option>
              {
                this.props.productAtts.map((value,index)=>{
                  return (<option key={index} value={value}>{value}</option>)
                })
              }
            </Field>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state){
return {
  productAtts : state.posts.prodAtts
}
}

export default connect(mapStateToProps,null)(RenderVariations);