//import _ from 'lodash';
import {get} from 'lodash';

export default function calculatePercentage(state){
  let totalLength=0;
  let counter=0;
  let progressPercent=0;


  const registeredFields = state.form.simpleFormFields.registeredFields || {};
  const fields = state.form.simpleFormFields.fields || {};
  const syncErrors = state.form.simpleFormFields.syncErrors|| {};
  totalLength = registeredFields.length;


  Object.keys(registeredFields).map((registeredFieldsItem, index) => {
    if(registeredFields[registeredFieldsItem].type != "FieldArray"){
     // console.log('asd', index,  registeredFields[registeredFieldsItem].type)
      const fieldItem = get(fields,registeredFields[registeredFieldsItem].name);
      if(fieldItem){
        if(fieldItem.touched && !(syncErrors[registeredFields[registeredFieldsItem].name])){
          counter ++;
        }
      }
    }
    else {
      totalLength --;
    }
  })
  if(totalLength > 0) {
    progressPercent = Math.round((counter*100)/totalLength);
  }

  console.log('counter',counter);
  console.log('totalLength',totalLength);
  console.log('progressPercent',progressPercent);


  console.log('whole object',state)
  return progressPercent;
}
