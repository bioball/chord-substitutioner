import { combineReducers } from "redux";
import soundReducer, { ISoundState } from "./soundReducer";
import { routerReducer, RouterState } from "react-router-redux";
import loaderReducer, { ILoaderState } from "./loaderReducer";
import songReducer, { ISongState } from "./songReducers";

export interface IAppState {
  sound: ISoundState;
  router: RouterState;
  loader: ILoaderState;
  song: ISongState;
}

export default combineReducers({
  sound: soundReducer,
  router: routerReducer,
  loader: loaderReducer,
  song: songReducer
});