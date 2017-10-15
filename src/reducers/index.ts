import { combineReducers } from "redux";
import soundReducer, { ISoundState } from "./soundReducer";
import { routerReducer, RouterState } from "react-router-redux";
import loaderReducer, { ILoaderState } from "./loaderReducer";

export interface IAppState {
  sound: ISoundState;
  router: RouterState;
  loader: ILoaderState;
}

export default combineReducers({
  sound: soundReducer,
  router: routerReducer,
  loader: loaderReducer
});