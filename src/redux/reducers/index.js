import { combineReducers } from "redux";
import authReducer from "./autoReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers here if needed
});

export default rootReducer;
