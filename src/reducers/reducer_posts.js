import { CREATE_FORM } from '../actions/index';

const INITIAL_STATE = { formData: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CREATE_FORM :
      return {...state, formData: action.payload};

    default: return state;
  }
  return state;
}

