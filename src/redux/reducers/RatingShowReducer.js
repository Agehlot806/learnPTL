// ratingReducer file under reducer folder
import {
  RATING_SHOW_FAILURE,
  RATING_SHOW_SUCCESS,
} from "../action/actionTypes";

const initialState = {
  isAuthenticated: false,
  ratings: [],
};

const ratingReducer = (state = initialState, action) => {
  switch (action.type) {
    case RATING_SHOW_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        ratings: action.payload,
      };

    case RATING_SHOW_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        ratings: action.payload,
      };

    default:
      return state;
  }
};

export default ratingReducer;
