import axios from "axios";
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "./actionTypes";
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
