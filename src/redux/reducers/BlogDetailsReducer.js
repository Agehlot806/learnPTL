// tutorReducer file under reducer folder
import {
    BLOGDETAILS_SUCCESS,
    BLOGDETAILS_FAILURE,
  } from "../action/actionTypes";
  
  const initialState = {
    isAuthenticated: false,
    blogdetails: [],
  };
  
  const blogDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
      case  BLOGDETAILS_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          blogdetails: action.payload,
        };
  
      case BLOGDETAILS_FAILURE:
        return {
          ...state,
          isAuthenticated: false,
          blogdetails: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default blogDetailsReducer;
  