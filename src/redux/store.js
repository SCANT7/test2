import { combineReducers, createStore } from "redux";
import login from "./login_reducer";

const reducers = combineReducers({
  login,
});

const store = createStore(reducers);

export default store;
