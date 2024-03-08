// productReducer file under reducer folder
import {
  FETCH_LATEST_FILTER_SUCCESS,
  FETCH_LATEST_FILTER_FAILURE,
} from "../action/actionTypes";

const initialState = {
  latestfilter: [],
};

const latestFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LATEST_FILTER_SUCCESS:
      return {
        ...state,
        latestfilter: action.payload,
      };

    case FETCH_LATEST_FILTER_FAILURE:
      return {
        ...state,
        latestfilter: action.payload,
      };

    default:
      return state;
  }
};

export default latestFilterReducer;
