import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SET_AUTH_TOKEN,
  REMOVE_AUTH_TOKEN,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "./actionTypes";
import { BASE_URL } from "../../config";
import { ApiEndPoints } from "../../utils/apiEndPoint";





export const loginSuccess = (user) => async (dispatch) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const userLogin = (user) => async dispatch => {
  console.log('user11111', user)
  try {
    await axios.post(`${BASE_URL}${ApiEndPoints.LOGIN_API}`, user)
      .then(response => {
        console.log("response", response)
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response.data
        })
      })
      .catch(error => {
        console.log('error in login', error.response.data)
        dispatch({
          type: LOGIN_FAILURE,
          payload: error.response.data
        })
      })
  } catch (error) {
    console.log('error in login', error.response.data)

    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response.data
    })
  }
}

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const logout = () => ({
  type: LOGOUT,
});


// Register Creators

export const registerSuccess = (users) => async (dispatch) => ({
  type: REGISTER_SUCCESS,
  payload: users,
});

export const userRegister = (users) => async dispatch => {
  console.log('user11111', users)
  try {
    await axios.post(`${BASE_URL}${ApiEndPoints.REGISTRATION_API}`, users)
      .then(response => {
        console.log("response", response)
        dispatch({
          type: REGISTER_SUCCESS,
          payload: response.data
        })
      })
      .catch(error => {
        console.log('error in Register', error.response.data)
        dispatch({
          type: REGISTER_FAILURE,
          payload: error.response.data
        })
      })
  } catch (error) {
    console.log('error in Register', error.response.data)

    dispatch({
      type: REGISTER_FAILURE,
      payload: error.response.data
    })
  }
}

export const registerFailure = () => ({
  type: REGISTER_FAILURE,
});


// Token Code
export const setAuthToken = (token) => ({
  type: SET_AUTH_TOKEN,
  payload: token,
});

export const removeAuthToken = () => ({
  type: REMOVE_AUTH_TOKEN,
});