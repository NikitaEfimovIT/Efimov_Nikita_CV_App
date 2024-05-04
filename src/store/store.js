import { combineReducers, createStore } from "redux";
import { appReducer } from "@src/store/appReducer";

const defaultReducer = combineReducers({
  app: appReducer,
});

export const store = createStore(defaultReducer);
