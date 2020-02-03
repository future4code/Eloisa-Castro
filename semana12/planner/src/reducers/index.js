import { combineReducers } from "redux";
import tasks from "./tasks";

export const rootReducer = combineReducers({
  // Seus reducers aqui
  tasks: tasks
});
