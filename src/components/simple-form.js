import React,{ Component } from 'react';
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import validate from './validate';
import { createForm } from '../actions/index';
import  Circle  from './circle';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import calculatePercentage from '../util/calculatePercentage';
import { renderField, renderHobbies } from '../util/renderFields';
import { bindActionCreators } from 'redux';



class SimpleForm extends Component {

  constructor(props) {
    super(props);
}

  onSubmit(props){
    this.props.createForm(props);
    // dipatch action
    //console.log(props);
  }

  render(){
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return(
      <div className="form-group">
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
        <Row>
          <Col md={8}>
            <Row>
              <Col md={12}>
                <Field className="form-control" name="firstName" type="text" component={renderField} label="Enter your first name"/>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Field name="LastName" type="text" component={renderField} label="Enter your Last name"/>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Field name="age" type="text" component={renderField} label="Enter your Age"/>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Field name="gender" type="text" component={renderField} label="Enter your Gender"/>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Field name="color" type="text" component={renderField} label="Enter your color"/>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <br />
                <FieldArray name="personInfo" component={renderHobbies} />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <br />
                <button className="btn btn-primary" type="submit" disabled={submitting}>Submit</button>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <Circle
              percent={this.props.progressPercent}
              strokeWidth="3"
              trailWidth="3"
              strokeLinecap="round"
              strokeColor="black"
            />
            {console.log('data got from reducer',this.props.dataFromReducer)}
          </Col>
        </Row>
      </form>

        {/*{console.log('props: ',this.props)}*/}
        {/*{console.log('Progress Percentage: ',parseInt(this.props.progressPercent))}*/}
        </div>
    );

  }
}

const selector = formValueSelector('simpleFormFields');


function mapStateToProps(state) {
  const progressPercent = calculatePercentage(state)
  //console.log('whole state',state);
  return{
    progressPercent,
    dataFromReducer : state.posts.formData
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createForm }, dispatch);
}


SimpleForm = connect((mapStateToProps),(mapDispatchToProps))(SimpleForm);


export default reduxForm ({
  form: 'simpleFormFields',
  validate
}, null, null)(SimpleForm);

