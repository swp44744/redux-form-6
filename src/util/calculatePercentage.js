

export default function calculatePercentage(state){
  let totalLength=0;
  let counter=0;
  let progressPercent=0;


  const registeredFields = state.form.simpleFormFields.registeredFields || {};
  const fields = state.form.simpleFormFields.fields || {};
  const syncErrors = state.form.simpleFormFields.syncErrors|| {};
  totalLength = registeredFields.length;

  Object.keys(registeredFields).map((registeredFieldsItem, index)=>{
    if(registeredFields[registeredFieldsItem].type == "FieldArray"){
      totalLength --;
    }
  })
  Object.keys(fields).map((fieldItem, index)=>{
    console.log('fieldItem',fieldItem);
    if( Object.prototype.toString.call( fields[fieldItem] ) === '[object Array]' ) {

      fields[fieldItem].map((fieldArray, index)=>{

        Object.keys(fieldArray).map((fieldArrayItem, index)=>{

          if(fieldArray[fieldArrayItem].touched && !(syncErrors[fieldArrayItem])){
            counter ++;
          }
        })
      })
    }


    if(fields[fieldItem].touched && !(syncErrors[fieldItem]) ) {
     // console.log('incrementing counter',fieldItem)

      Object.keys(registeredFields).map((registeredFieldsItem, index)=>{

        if(registeredFields[registeredFieldsItem].name == fieldItem &&  registeredFields[registeredFieldsItem].type != "FieldArray"){
          counter ++;
        }
      })
    }
  });
  if(totalLength > 0) {
    progressPercent = Math.round((counter*100)/totalLength);
  }

  console.log('counter',counter);
  console.log('totalLength',totalLength);
  console.log('progressPercent',progressPercent);


  console.log('whole object',state)
  return progressPercent;
}
