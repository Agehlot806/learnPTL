// action creator file
import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
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
  TUTORSREGISTER_SUCCESS,
  TUTORSREGISTER_FAILURE,
  BLOG_SUCCESS,
  BLOG_FAILURE,
  BLOGDETAILS_FAILURE,
  BLOGDETAILS_SUCCESS,
  FETCH_SLOTS_SUCCESS,
  FETCH_SLOTS_FAILURE,
  FETCH_LEVEL_SUCCESS,
  FETCH_LEVEL_FAILURE,
  FETCH_CERTIFICATION_SUCCESS,
  FETCH_CERTIFICATION_FAILURE,
  FETCH_TUTORCOUNT_SUCCESS,
  FETCH_TUTORCOUNT_FAILURE,
  CONTACT_FORM_SUCCESS,
  CONTACT_FORM_FAILURE,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAILURE,
  RESET_STATE,
  PROFILE_GET_SUCCESS,
  PROFILE_GET_FAILURE,
  CHANGEPASSWORD_SUCCESS,
  CHANGEPASSWORD_FAILURE,
  FORGET_PASSWORD_FAILURE,
  FORGET_PASSWORD_SUCCESS,
  FETCH_REVIEW_SUCCESS,
  FETCH_REVIEW_FAILURE,
} from "./actionTypes";
import { BASE_URL } from "../../config";
import { ApiEndPoints } from "../../utils/apiEndPoint";
// login start
export const loginSuccess = (user) => async (dispatch) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const userLogin = (user) => async (dispatch) => {
  console.log("user11111", user);
  try {
    await axios
      .post(
        `${BASE_URL}${ApiEndPoints.LOGIN_API}`,

        user
      )
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
  type: LOGOUT_FAILURE,
});
// login end
// CHANEPASSWORD START
export const changePasswordSuccess = (changepassword) => async (dispatch) => ({
  type: CHANGEPASSWORD_SUCCESS,
  payload: changepassword,
});

export const userChangePassword = (changepassword) => async (dispatch) => {
  const userid = localStorage.getItem("userid");
  console.log("changepassword", changepassword);
  try {
    await axios
      .post(
        `${BASE_URL}${ApiEndPoints.CHANGEPASSWORD_API}/${userid}`,

        changepassword
      )
      .then((response) => {
        console.log("response", response);
        dispatch({
          type: CHANGEPASSWORD_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("error in login", error.response.data);
        dispatch({
          type: CHANGEPASSWORD_FAILURE,
          payload: error.response.data,
        });
      });
  } catch (error) {
    console.log("error in login", error.response.data);

    dispatch({
      type: CHANGEPASSWORD_FAILURE,
      payload: error.response.data,
    });
  }
};

export const changePasswordFailure = () => ({
  type: CHANGEPASSWORD_FAILURE,
});
// CHANEPASSWORD END
// FORGETPASSWORD START
export const forgetPasswordSuccess = (forgetpassword) => async (dispatch) => ({
  type: FORGET_PASSWORD_SUCCESS,
  payload: forgetpassword,
});

export const userForgetPassword = (forgetpassword) => async (dispatch) => {
  // const userid = localStorage.getItem("userid");
  console.log("forgetpassword", forgetpassword);
  try {
    await axios
      .post(
        `${BASE_URL}${ApiEndPoints.FORGET_PASSWORD_API}`,

        forgetpassword
      )
      .then((response) => {
        console.log("response", response);
        dispatch({
          type: FORGET_PASSWORD_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("error in login", error.response.data);
        dispatch({
          type: FORGET_PASSWORD_FAILURE,
          payload: error.response.data,
        });
      });
  } catch (error) {
    console.log("error in login", error.response.data);

    dispatch({
      type: FORGET_PASSWORD_FAILURE,
      payload: error.response.data,
    });
  }
};

export const forgetPasswordFailure = () => ({
  type: CHANGEPASSWORD_FAILURE,
});
export const removeforgetPasswordData = () => async (dispatch) => {
  dispatch({
    type: FORGET_PASSWORD_SUCCESS,
    payload: [],
  });
};
// FORGETPASSWORD END
// loout start
export const userLogout = (userslogout) => async (dispatch) => {
  const userid = localStorage.getItem("userid");
  console.log("userslogout", userslogout);
  try {
    await axios
      .post(`${BASE_URL}${ApiEndPoints.LOGOUT_API}/${userid}`, userslogout)
      .then((response) => {
        console.log("response", response);
        dispatch({
          type: LOGOUT_SUCCESS,
          payload: response.data,
        });
        // Remove userid from localStorage upon successful logout
        localStorage.removeItem("userid");
      })
      .catch((error) => {
        console.log("error in Logout", error.response.data);
        dispatch({
          type: LOGOUT_FAILURE,
          payload: error.response.data,
        });
      });
  } catch (error) {
    console.log("error in Logout", error.response.data);

    dispatch({
      type: LOGOUT_FAILURE,
      payload: error.response.data,
    });
  }
};
export const resetState = () => ({
  type: RESET_STATE,
});
// logout end

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
export const removeregisterData = () => async (dispatch) => {
  dispatch({
    type: REGISTER_SUCCESS,
    payload: [],
  });
};
// Register Creators End

// Tutors Register Creators
export const tutorsregisterSuccess = (tutorsusers) => async (dispatch) => ({
  type: TUTORSREGISTER_SUCCESS,
  payload: tutorsusers,
});

export const tutorsRegister = (tutorsusers) => async (dispatch) => {
  console.log("user11111", tutorsusers);
  try {
    await axios
      .post(`${BASE_URL}${ApiEndPoints.LatestNew_API}`, tutorsusers)
      .then((response) => {
        console.log("response", response);
        dispatch({
          type: TUTORSREGISTER_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("error in Register", error.response.data);
        dispatch({
          type: TUTORSREGISTER_FAILURE,
          payload: error.response.data,
        });
      });
  } catch (error) {
    console.log("error in Register", error.response.data);

    dispatch({
      type: TUTORSREGISTER_FAILURE,
      payload: error.response.data,
    });
  }
};

export const tutorsregisterFailure = () => ({
  type: TUTORSREGISTER_FAILURE,
});
// Tutors Register Creators End

// Latest start
export const latestSuccess = (products) => async (dispatch) => ({
  type: FETCH_LATEST_SUCCESS,
  payload: products,
});

export const fetchLatest = (products) => async (dispatch) => {
  console.log("user11111", products);
  try {
    await axios
      .get(
        `${BASE_URL}${ApiEndPoints.Latest_API}`
        //  {
        //   'Content-Type': 'application/json',
        //   'Authorization': `Bearer ${localStorage.getItem('token')}` // Pass the token here
        //   },
      )
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

//CREATETUTOR CATEGORIES start
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
// CREATETUTOR CATEGORIES end

// CREATE SPEAKER Start
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

// Blog section api code
export const blogShowSuccess = (blogs) => async (dispatch) => ({
  type: BLOG_SUCCESS,
  payload: blogs,
});

export const fetchblogShow = (blogs) => async (dispatch) => {
  console.log("blogs", blogs);
  try {
    await axios
      .get(`${BASE_URL}${ApiEndPoints.BLOG}`, blogs)
      .then((response) => {
        console.log("blog", response);
        dispatch({
          type: BLOG_SUCCESS,
          payload: response?.data?.blogs,
        });
      })
      .catch((error) => {
        console.log("error in login", error?.response?.data?.blogs);
        dispatch({
          type: BLOG_FAILURE,
          payload: error?.response?.data?.blogs,
        });
      });
  } catch (error) {
    console.log("error in login", error?.response?.data?.blogs);

    dispatch({
      type: BLOG_FAILURE,
      payload: error.response.data.blogs,
    });
  }
};

export const blogshowFailure = () => ({
  type: BLOG_FAILURE,
});
// Blog section api code End

// Blog details section api code
export const blogDetailsSuccess = (blogdetails) => async (dispatch) => ({
  type: BLOGDETAILS_SUCCESS,
  payload: blogdetails,
});

export const fetchblogDetails = (id) => async (dispatch) => {
  try {
    await axios
      .get(`${BASE_URL}${ApiEndPoints.BLOG}/${id}`)
      .then((response) => {
        console.log("blog details", response);
        dispatch({
          type: BLOGDETAILS_SUCCESS,
          payload: response?.data?.blog,
        });
      })
      .catch((error) => {
        console.log("error in login", error?.response?.data?.blog);
        dispatch({
          type: BLOGDETAILS_FAILURE,
          payload: error?.response?.data?.blog,
        });
      });
  } catch (error) {
    console.log("error in login", error?.response?.data?.blog);

    dispatch({
      type: BLOGDETAILS_FAILURE,
      payload: error.response.data.blog,
    });
  }
};

export const blogDetailsFailure = () => ({
  type: BLOGDETAILS_FAILURE,
});

// Blog details section api code End

// Slot api code Start
export const slotSuccess = (slotshow) => async (dispatch) => ({
  type: FETCH_SLOTS_SUCCESS,
  payload: slotshow,
});

export const fetchslotShow = (id) => async (dispatch) => {
  try {
    await axios
      .get(`${BASE_URL}${ApiEndPoints.slotShow}/${id}`)
      .then((response) => {
        console.log("slot", response);
        dispatch({
          type: FETCH_SLOTS_SUCCESS,
          payload: response?.data?.slots,
        });
      })
      .catch((error) => {
        console.log("error in slot", error?.response?.data?.slots);
        dispatch({
          type: FETCH_SLOTS_FAILURE,
          payload: error?.response?.data?.slots,
        });
      });
  } catch (error) {
    console.log("error in slot", error?.response?.data?.slots);

    dispatch({
      type: FETCH_SLOTS_FAILURE,
      payload: error.response.data.slots,
    });
  }
};

export const slotFailure = () => ({
  type: FETCH_SLOTS_FAILURE,
});
// Slot api code End

// Level api code Start
export const levelSuccess = (levelshow) => async (dispatch) => ({
  type: FETCH_LEVEL_SUCCESS,
  payload: levelshow,
});

export const fetchlevelShow = (levelshow) => async (dispatch) => {
  try {
    await axios
      .get(`${BASE_URL}${ApiEndPoints.levelShow}`, levelshow)
      .then((response) => {
        console.log("levelShow", response);
        dispatch({
          type: FETCH_LEVEL_SUCCESS,
          payload: response?.data?.level,
        });
      })
      .catch((error) => {
        console.log("error in slot", error?.response?.data?.level);
        dispatch({
          type: FETCH_LEVEL_FAILURE,
          payload: error?.response?.data?.level,
        });
      });
  } catch (error) {
    console.log("error in slot", error?.response?.data?.level);

    dispatch({
      type: FETCH_LEVEL_FAILURE,
      payload: error.response.data.level,
    });
  }
};

export const levelFailure = () => ({
  type: FETCH_LEVEL_FAILURE,
});
// Level api code End

// certification api code Start
export const certificationShowSuccess =
  (certificationshow) => async (dispatch) => ({
    type: FETCH_CERTIFICATION_SUCCESS,
    payload: certificationshow,
  });

export const fetchcertificationShow =
  (certificationshow) => async (dispatch) => {
    console.log("certificationshow", certificationshow);
    try {
      await axios
        .get(`${BASE_URL}${ApiEndPoints.certificationShow}`, certificationshow)
        .then((response) => {
          console.log("certificationshow", response);
          dispatch({
            type: FETCH_CERTIFICATION_SUCCESS,
            payload: response?.data?.certification,
          });
        })
        .catch((error) => {
          console.log(
            "error in certificationshow",
            error?.response?.data?.certification
          );
          dispatch({
            type: FETCH_CERTIFICATION_FAILURE,
            payload: error?.response?.data?.certification,
          });
        });
    } catch (error) {
      console.log(
        "error in certificationshow",
        error?.response?.data?.certification
      );

      dispatch({
        type: FETCH_CERTIFICATION_FAILURE,
        payload: error.response.data.certification,
      });
    }
  };

export const certificationshowFailure = () => ({
  type: FETCH_CERTIFICATION_FAILURE,
});
// certification api code End

// tutors Show count api code Start
export const tutorcountSuccess = (tutorsshowcount) => async (dispatch) => ({
  type: FETCH_TUTORCOUNT_SUCCESS,
  payload: tutorsshowcount,
});

export const fetchtutorcount = (tutors) => async (dispatch) => {
  try {
    await axios
      .get(`${BASE_URL}${ApiEndPoints.tutorsShowcount}`, tutors)
      .then((response) => {
        console.log("tutorsshowcount", response);
        dispatch({
          type: FETCH_TUTORCOUNT_SUCCESS,
          payload: response?.data?.tutors,
        });
      })
      .catch((error) => {
        console.log("error in login", error?.response?.data?.tutors);
        dispatch({
          type: FETCH_TUTORCOUNT_FAILURE,
          payload: error?.response?.data?.tutors,
        });
      });
  } catch (error) {
    console.log("error in login", error?.response?.data?.tutors);

    dispatch({
      type: FETCH_TUTORCOUNT_FAILURE,
      payload: error.response.data.tutors,
    });
  }
};

export const tutorcountFailure = () => ({
  type: BLOGDETAILS_FAILURE,
});
// tutors Show count api code End

// CONTACTPOST Start
export const contactFormSuccess = (contactform) => async (dispatch) => ({
  type: CONTACT_FORM_SUCCESS,
  payload: contactform,
});

export const contactFormPost = (contactform) => async (dispatch) => {
  console.log("contactform", contactform);
  try {
    await axios
      .post(`${BASE_URL}${ApiEndPoints?.CONTACTPOST}`, contactform)
      .then((response) => {
        console.log("response", response);
        dispatch({
          type: CONTACT_FORM_SUCCESS,
          payload: response?.data,
        });
      })
      .catch((error) => {
        console.log("error in CONTACTPOST", error?.response?.data);
        dispatch({
          type: CONTACT_FORM_FAILURE,
          payload: error?.response?.data,
        });
      });
  } catch (error) {
    console.log("error in CONTACTPOST", error.response.data);

    dispatch({
      type: CONTACT_FORM_FAILURE,
      payload: error?.response?.data,
    });
  }
};

export const contactFormFailure = () => ({
  type: REGISTER_FAILURE,
});

export const removeFormData = () => async (dispatch) => {
  dispatch({
    type: CONTACT_FORM_SUCCESS,
    payload: [],
  });
};
// CONTACTPOST End

// profile Get Start
export const profileDetailSuccess = (profiledetails) => async (dispatch) => ({
  type: PROFILE_GET_SUCCESS,
  payload: profiledetails,
});

export const fetchprofileDetail = (profiledetails) => async (dispatch) => {
  const userid = localStorage.getItem("userid");
  console.log("useriduserid", userid);
  try {
    await axios
      .get(`${BASE_URL}${ApiEndPoints.PROFILE_GET_API}/${userid}`)
      .then((response) => {
        console.log("responseresponseresponse", response);
        dispatch({
          type: PROFILE_GET_SUCCESS,
          payload: response?.data?.user,
        });
      })
      .catch((error) => {
        console.log("error in profile details", error?.response?.data?.user);
        dispatch({
          type: PROFILE_GET_FAILURE,
          payload: error?.response?.data?.user,
        });
      });
  } catch (error) {
    console.log("error in login", error?.response?.data?.user);

    dispatch({
      type: PROFILE_GET_FAILURE,
      payload: error?.response?.data?.user,
    });
  }
};

export const profileDetailFailure = () => ({
  type: PROFILE_GET_FAILURE,
});
// profile Get END
// profile Update Start
// export const profileUpdateSuccess = (profileData) => async (dispatch) => ({
//   type: PROFILE_UPDATE_SUCCESS,
//   payload: profileData,
// });

export const profileUpdatePost = (profileData) => async (dispatch) => {
  const userid = localStorage.getItem("userid");
  console.log("useriduserid", userid);
  console.log("profileData", profileData);
  try {
    await axios
      .put(
        `${BASE_URL}${ApiEndPoints?.PROFILE_UPDATE_API}/${userid}`,
        profileData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        console.log("response", response);
        dispatch({
          type: PROFILE_UPDATE_SUCCESS,
          payload: response?.data,
        });
      })
      .catch((error) => {
        console.log("error in PROFILE_UPDATE_API", error?.response?.data);
        dispatch({
          type: PROFILE_UPDATE_FAILURE,
          payload: error?.response?.data,
        });
      });
  } catch (error) {
    console.log("error in PROFILE_UPDATE_API", error.response.data);

    dispatch({
      type: PROFILE_UPDATE_FAILURE,
      payload: error?.response?.data,
    });
  }
};

export const profileUpdateFailure = () => ({
  type: PROFILE_UPDATE_FAILURE,
});

export const removeProfileData = () => async (dispatch) => {
  dispatch({
    type: PROFILE_UPDATE_SUCCESS,
    payload: [],
  });
};
// profile Update Start

// Review start
// export const reviewSuccess = (review) => async (dispatch) => ({
//   type: FETCH_REVIEW_SUCCESS,
//   payload: review,
// });

export const fetchReview = () => async (dispatch) => {
  try {
    await axios
      .get(`${BASE_URL}${ApiEndPoints.REVIEW_SHOW}`)
      .then((response) => {
        console.log("reviewresponse", response);
        dispatch({
          type: FETCH_REVIEW_SUCCESS,
          payload: response?.data?.slots,
        });
      })
      .catch((error) => {
        console.log("error in login", error?.response?.data?.slots);
        dispatch({
          type: FETCH_REVIEW_FAILURE,
          payload: error?.response?.data?.slots,
        });
      });
  } catch (error) {
    console.log("error in login", error?.response?.data?.slots);

    dispatch({
      type: FETCH_REVIEW_FAILURE,
      payload: error.response.data.slots,
    });
  }
};

// export const reviewFailure = () => ({
//   type: FETCH_REVIEW_FAILURE,
// });
// Review api end
