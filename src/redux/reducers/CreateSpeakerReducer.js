// tutorReducer file under reducer folder
import {
  CREATE_SPEAKER_SUCCESS,
  CREATE_SPEAKER_FAILURE,
} from "../action/actionTypes";

const initialState = {
  isAuthenticated: false,
  createspeaker: [],
  speaker: false,
};

const createspeakerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SPEAKER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        createspeaker: action.payload,
      };

    case CREATE_SPEAKER_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        createspeaker: action.payload,
      };

    default:
      return state;
  }
};

export default createspeakerReducer;
