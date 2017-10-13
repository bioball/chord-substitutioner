import { combineReducers } from "redux";
import soundReducer, { ISoundState } from "./soundReducer";
import { routerReducer, RouterState } from "react-router-redux";

export interface IAppState {
  sound: ISoundState;
  router: RouterState;
}

export default combineReducers({
  sound: soundReducer,
  router: routerReducer
});