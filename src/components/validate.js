

const validate = values => {
  const errors = {};
  if(!values.firstName) {
    errors.firstName = 'First Name is Required';
  }
  if(!values.LastName) {
    errors.LastName = 'Last Name is Required';
  }

  return errors;
}

export default validate;