import React,{ Component } from 'react';
import { Field } from 'redux-form';
import  RenderVariations from '../components/variations';


export const renderHobbies = ({fields, meta:{ touched, error }}) => (
  <ul>
    <li>
      <button className="btn btn-primary" type="button" onClick={() => fields.push({})}> add personal info</button>
    </li>
    {
      fields.map((hobbyInfo,index) =>
        <li key= {index}>
          <button className="btn btn-secondary" type="button" onClick={() => fields.remove(index)}>Remove{index}</button>
          <h4>Hobbies</h4>
          <Field name={`${hobbyInfo}.hobby`} type="text" component={renderField} label="Enter your hobby"/>
          <br />
        </li>
      )
    }
  </ul>
);

export const renderAttributes = ({fields, meta:{ touched, error }}) => (
  <ul>
    <li>
      <RenderVariations/>
      <button type="link" onClick={()=>fields.push({})}>Add options</button>
    </li>
    {
      fields.map((attItem,index) =>
        <li key= {index}>
          <RenderVariations/>
          <button className="btn btn-secondary" type="button" onClick={() => fields.remove(index)}>R</button>
          <br />
        </li>
      )
    }
  </ul>

);


export const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
    {/*{console.log('renderfields: ',input)}*/}
  </div>

);
