// action creator file
import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SET_AUTH_TOKEN,
  REMOVE_AUTH_TOKEN,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  FETCH_LATEST_FAILURE,
  FETCH_LATEST_SUCCESS,
  TUTORS_SHOW_SUCCESS,
  TUTORS_SHOW_FAILURE,
  SPECIALTIESSHOW_SUCCESS,
  SPECIALTIESSHOW_FAILURE,
  SPEAK_SHOW_FAILURE,
  SPEAK_SHOW_SUCCESS,
  COUNTRY_SHOW_SUCCESS,
  COUNTRY_SHOW_FAILURE,
  RATING_SHOW_FAILURE,
  RATING_SHOW_SUCCESS,
  CREATETUTOR_CATEGORIES_SUCCESS,
  CREATETUTOR_CATEGORIES_FAILURE,
  CREATE_SPEAKER_SUCCESS,
  CREATE_SPEAKER_FAILURE,
} from "./actionTypes";
import { BASE_URL } from "../../config";
import { ApiEndPoints } from "../../utils/apiEndPoint";

export const loginSuccess = (user) => async (dispatch) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const userLogin = (user) => async (dispatch) => {
  console.log("user11111", user);
  try {
    await axios
      .post(`${BASE_URL}${ApiEndPoints.LOGIN_API}`, user)
      .then((response) => {
        console.log("response", response);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("error in login", error.response.data);
        dispatch({
          type: LOGIN_FAILURE,
          payload: error.response.data,
        });
      });
  } catch (error) {
    console.log("error in login", error.response.data);

    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response.data,
    });
  }
};

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

export const userRegister = (users) => async (dispatch) => {
  console.log("user11111", users);
  try {
    await axios
      .post(`${BASE_URL}${ApiEndPoints.REGISTRATION_API}`, users)
      .then((response) => {
        console.log("response", response);
        dispatch({
          type: REGISTER_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("error in Register", error.response.data);
        dispatch({
          type: REGISTER_FAILURE,
          payload: error.response.data,
        });
      });
  } catch (error) {
    console.log("error in Register", error.response.data);

    dispatch({
      type: REGISTER_FAILURE,
      payload: error.response.data,
    });
  }
};

export const registerFailure = () => ({
  type: REGISTER_FAILURE,
});

// LAtest start
export const latestSuccess = (products) => async (dispatch) => ({
  type: FETCH_LATEST_SUCCESS,
  payload: products,
});

export const fetchLatest = (products) => async (dispatch) => {
  console.log("user11111", products);
  try {
    await axios
      .get(`${BASE_URL}${ApiEndPoints.Latest_API}`, products)
      .then((response) => {
        console.log("response", response);
        dispatch({
          type: FETCH_LATEST_SUCCESS,
          payload: response?.data?.products,
        });
      })
      .catch((error) => {
        console.log("error in login", error?.response?.data?.products);
        dispatch({
          type: FETCH_LATEST_FAILURE,
          payload: error?.response?.data?.products,
        });
      });
  } catch (error) {
    console.log("error in login", error?.response?.data?.products);

    dispatch({
      type: FETCH_LATEST_FAILURE,
      payload: error.response.data.products,
    });
  }
};

export const latestFailure = () => ({
  type: FETCH_LATEST_FAILURE,
});
// latest api end
// TUTORS_SHOW start
export const tutorsShowSuccess = (tutors) => async (dispatch) => ({
  type: TUTORS_SHOW_SUCCESS,
  payload: tutors,
});

export const fetchTutorsShow = (tutors) => async (dispatch) => {
  console.log("usertutors", tutors);
  try {
    await axios
      .get(`${BASE_URL}${ApiEndPoints.TUTORS_SHOW}`, tutors)
      .then((response) => {
        console.log("response", response);
        dispatch({
          type: TUTORS_SHOW_SUCCESS,
          payload: response?.data?.tutors,
        });
      })
      .catch((error) => {
        console.log("error in login", error?.response?.data?.tutors);
        dispatch({
          type: TUTORS_SHOW_FAILURE,
          payload: error?.response?.data?.tutors,
        });
      });
  } catch (error) {
    console.log("error in login", error?.response?.data?.tutors);

    dispatch({
      type: TUTORS_SHOW_FAILURE,
      payload: error.response.data.tutors,
    });
  }
};

export const tutorsshowFailure = () => ({
  type: TUTORS_SHOW_FAILURE,
});
// tutor show end
// SPECIALTIES SHOW start
export const specialtiesShowSuccess = (specialties) => async (dispatch) => ({
  type: SPECIALTIESSHOW_SUCCESS,
  payload: specialties,
});

export const fetchSpecialtiesShow = (specialties) => async (dispatch) => {
  console.log("user11111", specialties);
  try {
    await axios
      .get(`${BASE_URL}${ApiEndPoints.SPECIALTIES_SHOW}`, specialties)
      .then((response) => {
        console.log("response", response);
        dispatch({
          type: SPECIALTIESSHOW_SUCCESS,
          payload: response?.data?.specialties,
        });
      })
      .catch((error) => {
        console.log("error in login", error?.response?.data?.specialties);
        dispatch({
          type: SPECIALTIESSHOW_FAILURE,
          payload: error?.response?.data?.specialties,
        });
      });
  } catch (error) {
    console.log("error in login", error?.response?.data?.specialties);

    dispatch({
      type: SPECIALTIESSHOW_FAILURE,
      payload: error.response.data.specialties,
    });
  }
};

export const specialtiesShowFailure = () => ({
  type: SPECIALTIESSHOW_FAILURE,
});
// SPECIALTIES SHOW end
// speaks SHOW start
export const speaksShowSuccess = (speaks) => async (dispatch) => ({
  type: SPEAK_SHOW_SUCCESS,
  payload: speaks,
});

export const fetchSpeakShow = (speaks) => async (dispatch) => {
  console.log("user11111", speaks);
  try {
    await axios
      .get(`${BASE_URL}${ApiEndPoints.SPEAK_SHOW}`, speaks)
      .then((response) => {
        console.log("response", response);
        dispatch({
          type: SPEAK_SHOW_SUCCESS,

          payload: response?.data?.speaks,
        });
      })
      .catch((error) => {
        console.log("error in login", error?.response?.data?.speaks);
        dispatch({
          type: SPEAK_SHOW_FAILURE,

          payload: error?.response?.data?.speaks,
        });
      });
  } catch (error) {
    console.log("error in login", error?.response?.data?.speaks);

    dispatch({
      type: SPEAK_SHOW_FAILURE,
      payload: error.response.data.speaks,
    });
  }
};

export const speaksShowFailure = () => ({
  type: SPEAK_SHOW_FAILURE,
});
// speaks SHOW end
// COUNTRY SHOW start
export const countryShowSuccess = (countrys) => async (dispatch) => ({
  type: COUNTRY_SHOW_SUCCESS,
  payload: countrys,
});

export const fetchCountryShow = (countrys) => async (dispatch) => {
  console.log("user11111", countrys);
  try {
    await axios
      .get(`${BASE_URL}${ApiEndPoints.COUNTRY_SHOW}`, countrys)
      .then((response) => {
        console.log("response", response);
        dispatch({
          type: COUNTRY_SHOW_SUCCESS,

          payload: response?.data?.countrys,
        });
      })
      .catch((error) => {
        console.log("error in login", error?.response?.data?.countrys);
        dispatch({
          type: COUNTRY_SHOW_FAILURE,

          payload: error?.response?.data?.countrys,
        });
      });
  } catch (error) {
    console.log("error in login", error?.response?.data?.countrys);

    dispatch({
      type: COUNTRY_SHOW_FAILURE,
      payload: error.response.data.countrys,
    });
  }
};

export const countryShowFailure = () => ({
  type: SPEAK_SHOW_FAILURE,
});
// country SHOW end
// RATINGS SHOW start
export const ratingShowSuccess = (ratings) => async (dispatch) => ({
  type: RATING_SHOW_SUCCESS,
  payload: ratings,
});

export const fetchRatingShow = (ratings) => async (dispatch) => {
  console.log("user11111", ratings);
  try {
    await axios
      .get(`${BASE_URL}${ApiEndPoints.RATING_SHOW}`, ratings)
      .then((response) => {
        console.log("response", response);
        dispatch({
          type: RATING_SHOW_SUCCESS,

          payload: response?.data?.ratings,
        });
      })
      .catch((error) => {
        console.log("error in login", error?.response?.data?.ratings);
        dispatch({
          type: RATING_SHOW_FAILURE,

          payload: error?.response?.data?.ratings,
        });
      });
  } catch (error) {
    console.log("error in login", error?.response?.data?.ratings);

    dispatch({
      type: RATING_SHOW_FAILURE,
      payload: error.response.data.ratings,
    });
  }
};

export const ratingShowFailure = () => ({
  type: SPEAK_SHOW_FAILURE,
});
// Rating SHOW end
//CREATETUTOR_CATEGORIES_SUCCESS start
// CREATE_SPEAKER_SUCCESS
// CREATE_SPEAKER_FAILURE

export const createTutorCategorySuccess =
  (createtutor) => async (dispatch) => ({
    type: CREATETUTOR_CATEGORIES_SUCCESS,
    payload: createtutor,
  });

export const fetchCreateTutorCategory = (createtutor) => async (dispatch) => {
  // Ensure superTutors and professionalTutors are set to false if not provided
  const requestData = {
    ...createtutor,
    superTutors: createtutor.superTutors || false,
    professionalTutors: createtutor.professionalTutors || false,
  };

  console.log("requestData", requestData);

  try {
    await axios
      .post(`${BASE_URL}${ApiEndPoints.CREATETUTOR_CATEGORIES}`, requestData)
      .then((response) => {
        console.log("response", response);
        dispatch({
          type: CREATETUTOR_CATEGORIES_SUCCESS,
          payload: response?.data,
        });
      })
      .catch((error) => {
        console.log("error in login", error?.response?.data);
        dispatch({
          type: CREATETUTOR_CATEGORIES_FAILURE,
          payload: error?.response?.data,
        });
      });
  } catch (error) {
    console.log("error in login", error?.response?.data);
    dispatch({
      type: CREATETUTOR_CATEGORIES_FAILURE,
      payload: error.response.data,
    });
  }
};

export const createTutorCategoryFailure = () => ({
  type: CREATETUTOR_CATEGORIES_FAILURE,
});
// CREATETUTOR_CATEGORIES_SUCCESS end

// CREATE_SPEAKER Start
export const createSpeakerSuccess = (createspeaker) => async (dispatch) => ({
  type: CREATE_SPEAKER_SUCCESS,
  payload: createspeaker,
});
export const fetchCreateSpeaker = (createspeaker) => async (dispatch) => {
  // Ensure speaker are set to false if not provided
  const requestData = {
    ...createspeaker,
    speaker: createspeaker.speaker || false,
  };

  console.log("requestData", requestData);

  try {
    await axios
      .post(`${BASE_URL}${ApiEndPoints.CREATE_SPEAKER}`, requestData)
      .then((response) => {
        console.log("response", response);
        dispatch({
          type: CREATE_SPEAKER_SUCCESS,
          payload: response?.data,
        });
      })
      .catch((error) => {
        console.log("error in login", error?.response?.data);
        dispatch({
          type: CREATE_SPEAKER_FAILURE,
          payload: error?.response?.data,
        });
      });
  } catch (error) {
    console.log("error in login", error?.response?.data);
    dispatch({
      type: CREATE_SPEAKER_FAILURE,
      payload: error.response.data,
    });
  }
};

export const createSpeakerFailure = () => ({
  type: CREATE_SPEAKER_FAILURE,
});
// CREATESPEAKER end
// Token Code
export const setAuthToken = (token) => ({
  type: SET_AUTH_TOKEN,
  payload: token,
});

export const removeAuthToken = () => ({
  type: REMOVE_AUTH_TOKEN,
});
