// specialtiesReducer file under reducer folder
import {
  SPECIALTIESSHOW_FAILURE,
  SPECIALTIESSHOW_SUCCESS,
} from "../action/actionTypes";

const initialState = {
  isAuthenticated: false,
  specialties: [],
};

const specialtiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPECIALTIESSHOW_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        specialties: action.payload,
      };

    case SPECIALTIESSHOW_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        specialties: action.payload,
      };

    default:
      return state;
  }
};

export default specialtiesReducer;
