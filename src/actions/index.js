
export const CREATE_FORM = 'CREATE_FORM';


export function createForm(props) {
  console.log("props: ",props);
  return {
    type: CREATE_POST,
    payload: props
  }
}
