// autoReducer file
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  SET_AUTH_TOKEN,
  REMOVE_AUTH_TOKEN,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  TUTORSREGISTER_SUCCESS,
  TUTORSREGISTER_FAILURE,
  CHANGEPASSWORD_SUCCESS,
  CHANGEPASSWORD_FAILURE,
  FORGET_PASSWORD_SUCCESS,
  FORGET_PASSWORD_FAILURE,
} from "../action/actionTypes";

const initialState = {
  isAuthenticated: false,
  user: null,
  changepassword: null,
  forgetpassword: null,
  token: null,
  users: null,
  products: null,
  tutorsusers: null,
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

    case CHANGEPASSWORD_SUCCESS:
      // toast.success("Login successful!");
      return {
        ...state,
        isAuthenticated: true,
        changepassword: action.payload,
      };

    case CHANGEPASSWORD_FAILURE:
      // toast.error("Login failed. Please try again.");
      return {
        ...state,
        isAuthenticated: false,
        changepassword: action.payload,
      };
    case FORGET_PASSWORD_SUCCESS:
      // toast.success("Login successful!");
      return {
        ...state,
        isAuthenticated: true,
        forgetpassword: action.payload,
      };

    case FORGET_PASSWORD_FAILURE:
      // toast.error("Login failed. Please try again.");
      return {
        ...state,
        isAuthenticated: false,
        forgetpassword: action.payload,
      };

    case LOGOUT_SUCCESS:
      // toast.info("Logged out successfully.");s
      return {
        ...state,
        isAuthenticated: false,
        user: action.payload,
      };

    // case LOGOUT_FAILURE:
    //   // toast.info("Logged out successfully.");s
    //   return initialState;

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

    case TUTORSREGISTER_SUCCESS:
      return {
        ...state,
        // isAuthenticated: true,
        tutorsusers: action.payload,
      };

    case TUTORSREGISTER_FAILURE:
      return {
        ...state,
        // isAuthenticated: false,
        tutorsusers: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
