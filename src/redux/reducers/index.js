// index.js file under reducers folder
import { combineReducers } from "redux";
import authReducer from "./autoReducer";
import productReducer from "./ProductReducer";
import tutorReducer from "./TutorsShowReducer";
import specialtiesReducer from "./SpecialtiesShowReducer";
import speakReducer from "./SpeakShowReducer";
import countryReducer from "./CountryShowReducer";
import ratingReducer from "./RatingShowReducer";
import createtutorReducer from "./CreateTutorReducer";
import createspeakerReducer from "./CreateSpeakerReducer";

const rootReducer = combineReducers({
  // Add other reducers here if needed
  auth: authReducer,
  products: productReducer,
  tutors: tutorReducer,
  specialties: specialtiesReducer,
  speaks: speakReducer,
  countrys: countryReducer,
  ratings: ratingReducer,
  createtutor: createtutorReducer,
  createspeaker: createspeakerReducer,
});

export default rootReducer;
