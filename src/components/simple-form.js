import React,{ Component } from 'react';
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import validate from './validate';
import { createForm } from '../actions/index';
import  Circle  from './circle';



class SimpleForm extends Component {

  constructor(props) {
    super(props);
}

  onSubmit(props){
   // this.props.createForm(props);
    // dipatch action
  }

  render(){
    const { fields : { firstName, lastName, age, gender },handleSubmit, pristine, reset, submitting } = this.props;
    return(
      <div className="form-group">
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
        <div>
        <Field className="form-control" name="firstName" type="text" component={renderField} label="Enter your first name"/>
          <br />
        <Field name="LastName" type="text" component={renderField} label="Enter your Last name"/>
          <br />
        <Field name="age" type="text" component={renderField} label="Enter your Age"/>
          <br />
        <Field name="gender" type="text" component={renderField} label="Enter your Gender"/>
          <br />
          <Field name="color" type="text" component={renderField} label="Enter your color"/>
          </div>
        <div>
          <button className="btn btn-primary" type="submit" disabled={submitting}>Submit</button>
        </div>
      </form>
      <Circle
        percent={this.props.progressPercent}
        strokeWidth="3"
        trailWidth="3"
        strokeLinecap="round"
        strokeColor="black"
      />
        {/*{console.log('props: ',this.props)}*/}
        {/*{console.log('Progress Percentage: ',parseInt(this.props.progressPercent))}*/}
        </div>
    );

  }
}


const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
    {/*{console.log('renderfields: ',input)}*/}
  </div>

);


const selector = formValueSelector('simpleFormFields');



function mapStateToProps(state) {
  const registeredFields = state.form.simpleFormFields.registeredFields|| {};
  const fields = state.form.simpleFormFields.fields || {};
  const syncErrors = state.form.simpleFormFields.syncErrors|| {};
  var counter=0;
  var progressPercent=0;
  var totalLength=0;

      totalLength = registeredFields.length;
      Object.keys(fields).map((key, index)=>{
        //console.log('fields: ', fields[key]);

        if(fields[key].touched && !(syncErrors[key])) {
          counter ++;
        }

      });
  if(totalLength > 0) {
    progressPercent = (counter*100)/totalLength;

  }


  console.log('whole state',state);
  return{
    progressPercent
  }
}



SimpleForm = connect((mapStateToProps),null)(SimpleForm);


export default reduxForm ({
  form: 'simpleFormFields',
  fields:['firstName','lastName','gender','age'],
  validate
}, null, { createForm })(SimpleForm);