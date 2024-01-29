// countryReducer file under reducer folder
import {
  COUNTRY_SHOW_FAILURE,
  COUNTRY_SHOW_SUCCESS,
} from "../action/actionTypes";

const initialState = {
  isAuthenticated: false,
  countrys: [],
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRY_SHOW_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        countrys: action.payload,
      };

    case COUNTRY_SHOW_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        countrys: action.payload,
      };

    default:
      return state;
  }
};

export default countryReducer;
