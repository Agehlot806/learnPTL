import { useEffect } from "react";
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../action/actionTypes";

const initialState = {
  isAuthenticated: false,
  user: null,
};


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      // toast.success("Login successful!");
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGIN_FAILURE:
      // toast.error("Login failed. Please try again.");
      return {
        ...state,
        isAuthenticated: false,
        user: action.payload,
      };
    case LOGOUT:
      // toast.info("Logged out successfully.");s
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
