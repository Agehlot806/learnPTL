// Contact Form
import {
  CONTACT_FORM_SUCCESS,
  CONTACT_FORM_FAILURE,
} from "../action/actionTypes";

const initialState = {
  isAuthenticated: false,
  contactform: [],
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTACT_FORM_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        contactform: action.payload,
      };

    case CONTACT_FORM_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        contactform: action.payload,
      };

    default:
      return state;
  }
};

export default contactReducer;
