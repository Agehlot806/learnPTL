// tutorReducer file under reducer folder
import {
  FETCH_LEVEL_SUCCESS,
  FETCH_LEVEL_FAILURE,
} from "../action/actionTypes";

const initialState = {
  isAuthenticated: false,
  levelshow: [],
};

const LevelShowReducer = (state = initialState, action) => {
  switch (action.type) {
    case  FETCH_LEVEL_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        levelshow: action.payload,
      };

    case FETCH_LEVEL_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        levelshow: action.payload,
      };

    default:
      return state;
  }
};

export default LevelShowReducer;
