import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { thunk } from "redux-thunk";
import rootReducer from "../redux/reducers";

const persistConfig = {
  key: "root",
  storage,
};
const appReducer = (state, action) => {
  console.log("action===", action.type);
  if (action.type === "LOGOUT_SUCCESS") {
    return rootReducer(undefined, action);
  }

  return rootReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, appReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
