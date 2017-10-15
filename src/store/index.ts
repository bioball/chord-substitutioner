import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import DevTools from "../components/DevTools";
import reducer from "../reducers";
import { createBrowserHistory } from "history";
import loaderMiddleware from "../middleware/loaderMiddleware";

export const history = createBrowserHistory();
export const middleware = applyMiddleware(loaderMiddleware, routerMiddleware(history));

export const enhancer = compose(middleware, DevTools.instrument());

const store = createStore(reducer, {}, enhancer);

/* tslint:disable:no-string-literal */
if (module["hot"]) {
  module["hot"].accept("../reducers", () => {
    store.replaceReducer(require("../reducers"));
  });
}
/* tslint:enable:no-string-literal */

export default store;