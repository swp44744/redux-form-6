import { CREATE_FORM, PROD_ATT } from '../actions/index';

const INITIAL_STATE = { formData: null, prodAtts: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CREATE_FORM :
      return {...state, formData: action.payload};

    case PROD_ATT :
      return { ...state, prodAtts : action.payload };

    default: return state;
  }
  return state;
}

