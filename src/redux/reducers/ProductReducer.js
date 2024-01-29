// productReducer file under reducer folder
import {
  FETCH_LATEST_SUCCESS,
  FETCH_LATEST_FAILURE,
} from "../action/actionTypes";

const initialState = {
  isAuthenticated: false,
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LATEST_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        products: action.payload,
      };

    case FETCH_LATEST_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        products: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
