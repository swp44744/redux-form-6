import React,{ Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import validate from './validate';
import { createForm } from '../actions/index';
import ProgressElement from './Progress';

class SimpleForm extends Component {

  constructor(props) {
    super(props);

    this.state = { progressPercent: 0 }

}

  onSubmit(props){
   // this.props.createForm(props);
    console.log("onSubmit called",props);

  }



  render(){
    const { fields : { firstName, lastName, age, gender },handleSubmit, pristine, reset, submitting } = this.props;
    console.log('firstName: ',firstName);

    return(
      <div className="form-group">
      <body>
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div>
        <Field className="form-control" name="firstName" type="text" component={renderField} label="Enter your first name"
               />

          <br />
        <Field name="LastName" type="text" component={renderField} label="Enter your Last name"/>
          <br />
        <Field name="age" type="text" component={renderField} label="Enter your Age"/>
          <br />
        <Field name="gender" type="text" component={renderField} label="Enter your Gender"/>
          </div>
        <div>
          <button className="btn btn-primary" type="submit" disabled={submitting}>Submit</button>
        </div>
      </form>
      </body>
      </div>
    );

  }
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default reduxForm ({
  form: 'simpleFormFields',
  fields:['firstName','lastName','gender','age'],
  validate
}, null, { createForm })(SimpleForm);