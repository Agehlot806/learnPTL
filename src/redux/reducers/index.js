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
import blogShowReducer from "./BlogShowReducer";
import blogDetailsReducer from "./BlogDetailsReducer";
import SlotShowReducer from "./SlotShowReducer";
import LevelShowReducer from "./LevelShowReducer";
import CertificationShowReducer from "./CertificationReducer";

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
  blogs : blogShowReducer,
  blogdetails : blogDetailsReducer,
  slotshow: SlotShowReducer,
  levelshow: LevelShowReducer,
  certificationshow: CertificationShowReducer
});

export default rootReducer;
