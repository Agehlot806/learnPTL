import { useEffect } from "react";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SET_AUTH_TOKEN,
  REMOVE_AUTH_TOKEN,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from "../action/actionTypes";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  users: null,
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



    case REGISTER_SUCCESS:
      return {
        ...state,
        // isAuthenticated: true,
        users: action.payload,
      };

    case REGISTER_FAILURE:
      return {
        ...state,
        // isAuthenticated: false,
        users: action.payload,
      };

    case SET_AUTH_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    case REMOVE_AUTH_TOKEN:
      return {
        ...state,
        token: null,
      };

    default:
      return state;
  }
};

export default authReducer;
