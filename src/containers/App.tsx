import React from 'react';
import { IAppState } from "../reducers";
import { Provider } from "react-redux";
import store, { history } from "../store";
import { Route, RouteComponentProps } from "react-router";
import { ConnectedRouter } from 'connected-react-router';
import Home from "./Home";
import DevTools from "../components/DevTools";
import { Dispatch } from "redux";
import { AppAction } from "../actions";
import Loader from "../components/Loader";

export interface IAppProps extends IAppState, RouteComponentProps<{}> {
  dispatch: Dispatch<AppAction>;
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <div>
              <Route path="/loading" component={Loader} />
              <Route exact={true} path="/" component={Home} />
            </div>
          </ConnectedRouter>
        </Provider>
        <DevTools store={store} />
      </div>
    );
  }
}