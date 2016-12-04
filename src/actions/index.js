
export const CREATE_FORM = 'CREATE_FORM';
export const PROD_ATT = 'PROD_ATT';


export function createForm(props) {
  //console.log("props: ",props);
  return {
    type: CREATE_FORM,
    payload: props
  };
}


export function productAttributes() {
  const attributes = ['scotch', 'irish', 'beer', 'cocktails', 'patiala'];

  return {
    type: PROD_ATT,
    payload: attributes
  };
}
