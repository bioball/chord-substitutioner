import { Dispatch, Middleware, MiddlewareAPI } from "redux";
import { IAppState } from "../reducers";
import { AppAction } from "../actions";
import { replace } from "react-router-redux";

/**
 * Intercept route loading states. redirect to loader state if we haven't fully loaded.
 */
const middleware = (store: MiddlewareAPI<IAppState>) => 
  (next: Dispatch<AppAction>) => 
  (action: AppAction) => {
    const state = store.getState();
    if (action.type === "@@router/LOCATION_CHANGE" && action.payload.pathname !== "/loading" && !state.loader.midi) {
      return next(replace("/loading"));
    }
    return next(action);
  };

export default middleware as Middleware;