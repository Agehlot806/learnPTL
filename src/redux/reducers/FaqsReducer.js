// productReducer file under reducer folder
import { FETCH_FAQS_SUCCESS, FETCH_FAQS_FAILURE } from "../action/actionTypes";

const initialState = {
  faqs: [],
};

const faqsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FAQS_SUCCESS:
      return {
        ...state,
        faqs: action.payload,
      };

    case FETCH_FAQS_FAILURE:
      return {
        ...state,
        faqs: action.payload,
      };

    default:
      return state;
  }
};

export default faqsReducer;
