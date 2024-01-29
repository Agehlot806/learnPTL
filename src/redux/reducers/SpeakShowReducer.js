// speakReducer file under reducer folder
import { SPEAK_SHOW_FAILURE, SPEAK_SHOW_SUCCESS } from "../action/actionTypes";

const initialState = {
  isAuthenticated: false,
  speaks: [],
};

const speakReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPEAK_SHOW_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        speaks: action.payload,
      };

    case SPEAK_SHOW_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        speaks: action.payload,
      };

    default:
      return state;
  }
};

export default speakReducer;
