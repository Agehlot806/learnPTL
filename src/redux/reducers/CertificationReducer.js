// tutorReducer file under reducer folder
import {
    FETCH_CERTIFICATION_SUCCESS,
    FETCH_CERTIFICATION_FAILURE,
  } from "../action/actionTypes";
  
  const initialState = {
    isAuthenticated: false,
    certificationshow: [],
  };
  
  const CertificationShowReducer = (state = initialState, action) => {
    switch (action.type) {
      case  FETCH_CERTIFICATION_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          certificationshow: action.payload,
        };
  
      case FETCH_CERTIFICATION_FAILURE:
        return {
          ...state,
          isAuthenticated: false,
          certificationshow: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default CertificationShowReducer;
  