// tutorReducer file under reducer folder
import {
    BLOG_SUCCESS,
    BLOG_FAILURE,
  } from "../action/actionTypes";
  
  const initialState = {
    isAuthenticated: false,
    blogs: [],
  };
  
  const blogShowReducer = (state = initialState, action) => {
    switch (action.type) {
      case  BLOG_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          blogs: action.payload,
        };
  
      case BLOG_FAILURE:
        return {
          ...state,
          isAuthenticated: false,
          blogs: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default blogShowReducer;
  