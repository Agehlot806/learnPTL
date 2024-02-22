// Import action types
import {
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAILURE,
  PROFILE_GET_SUCCESS,
  PROFILE_GET_FAILURE,
} from "../action/actionTypes";

// Define initial state
const initialState = {
  isAuthenticated: false,
  response: null,
  error: null,
  profileDetails: null,
};

// Reducer function
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_UPDATE_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        response: action.payload,
        // error: null,
      };
    case PROFILE_UPDATE_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        response: action.payload,
        // error: null,
      };

    case PROFILE_GET_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        profileDetails: action.payload,
        error: null,
      };
    case PROFILE_GET_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        profileDetails: action.payload,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
