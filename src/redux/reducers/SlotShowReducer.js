// tutorReducer file under reducer folder
import {
    FETCH_SLOTS_SUCCESS,
    FETCH_SLOTS_FAILURE,
  } from "../action/actionTypes";
  
  const initialState = {
    isAuthenticated: false,
    slotshow: [],
  };
  
  const SlotShowReducer = (state = initialState, action) => {
    switch (action.type) {
      case  FETCH_SLOTS_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          slotshow: action.payload,
        };
  
      case FETCH_SLOTS_FAILURE:
        return {
          ...state,
          isAuthenticated: false,
          slotshow: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default SlotShowReducer;
  