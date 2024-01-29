// tutorReducer file under reducer folder
import {
  TUTORS_SHOW_FAILURE,
  TUTORS_SHOW_SUCCESS,
} from "../action/actionTypes";

const initialState = {
  isAuthenticated: false,
  tutors: [],
};

const tutorReducer = (state = initialState, action) => {
  switch (action.type) {
    case TUTORS_SHOW_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        tutors: action.payload,
      };

    case TUTORS_SHOW_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        tutors: action.payload,
      };

    default:
      return state;
  }
};

export default tutorReducer;
