// tutorReducer file under reducer folder

import {
  CREATETUTOR_CATEGORIES_SUCCESS,
  CREATETUTOR_CATEGORIES_FAILURE,
} from "../action/actionTypes";

const initialState = {
  isAuthenticated: false,
  createtutor: [],
  superTutors: false,
  professionalTutors: false,
};

const createtutorReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATETUTOR_CATEGORIES_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        createtutor: action.payload,
      };

    case CREATETUTOR_CATEGORIES_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        createtutor: action.payload,
      };

    default:
      return state;
  }
};

export default createtutorReducer;
