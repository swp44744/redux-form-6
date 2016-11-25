

const validate = values => {
  const errors = {};
  if(!values.firstName) {
    errors.firstName = 'First Name is Required';
  }
  if(!values.LastName) {
    errors.LastName = 'Last Name is Required';
  }
  if(!values.age) {
    errors.age = 'age is Required';
  }
  if(!values.gender) {
    errors.gender = 'gender is Required';
  }
  if(values.color == 'blue') {
    errors.color = 'blue is not valid';
  }

  return errors;
}

export default validate;