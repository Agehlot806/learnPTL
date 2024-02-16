// TutorCountReducer file under reducer folder
import {
    FETCH_TUTORCOUNT_SUCCESS,
    FETCH_TUTORCOUNT_FAILURE,
  } from "../action/actionTypes";
  
  const initialState = {
    isAuthenticated: false,
    tutorsshowcount: [],
  };
  
  const TutorCountReducer = (state = initialState, action) => {
    switch (action.type) {
      case  FETCH_TUTORCOUNT_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          tutorsshowcount: action.payload,
        };
  
      case FETCH_TUTORCOUNT_FAILURE:
        return {
          ...state,
          isAuthenticated: false,
          tutorsshowcount: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default TutorCountReducer;
  