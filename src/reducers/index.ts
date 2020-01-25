import { combineReducers } from "redux";
import soundReducer, { ISoundState } from "./soundReducer";
import { connectRouter, RouterState } from "connected-react-router";
import loaderReducer, { ILoaderState } from "./loaderReducer";
import songReducer, { ISongState } from "./songReducers";
import { History } from "history";

export interface IAppState {
  sound: ISoundState;
  router: RouterState;
  loader: ILoaderState;
  song: ISongState;
}

const createReducer = (history: History) => combineReducers({
  sound: soundReducer,
  router: connectRouter(history),
  loader: loaderReducer,
  song: songReducer
});

export default createReducer;
