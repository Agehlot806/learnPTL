// productReducer file under reducer folder
import {
  FETCH_REVIEW_SUCCESS,
  FETCH_REVIEW_FAILURE,
} from "../action/actionTypes";

const initialState = {
  slots: [],
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REVIEW_SUCCESS:
      return {
        ...state,
        slots: action.payload,
      };

    case FETCH_REVIEW_FAILURE:
      return {
        ...state,
        slots: action.payload,
      };

    default:
      return state;
  }
};

export default reviewReducer;
