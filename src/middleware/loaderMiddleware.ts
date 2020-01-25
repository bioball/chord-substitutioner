import { Dispatch, Middleware, Store } from "redux";
import { AppAction } from "../actions";
import { replace } from "connected-react-router";
import { IAppState } from "../reducers";

/**
 * Intercept route loading states. redirect to loader state if we haven't fully loaded.
 */
const middleware = (store: Store<IAppState>) => 
  (next: Dispatch<AppAction>) => 
  (action: AppAction) => {
    const state = store.getState();
    if (action.type === "@@router/LOCATION_CHANGE" && action.payload.location.pathname !== "/loading" && !state.loader.midi) {
      return next(replace("/loading"));
    }
    return next(action);
  };

export default middleware as Middleware;