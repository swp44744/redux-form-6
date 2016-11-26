
export const CREATE_FORM = 'CREATE_FORM';


export function createForm(props) {
  console.log("props: ",props);
  console.log("in action");

  return {
    type: CREATE_FORM,
    payload: props
  };
}
