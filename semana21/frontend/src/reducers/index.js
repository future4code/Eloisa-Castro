import { combineReducers } from "redux";
import languages from "./languages";

const rootReducer = combineReducers({
  languages: languages,
});

export default rootReducer;
