import * as React from 'react';
import { IAppState } from "../reducers";
import { Provider } from "react-redux";
import store, { history } from "../store";
import { Route } from "react-router";
import { ConnectedRouter } from 'react-router-redux';
import Home from "./Home";
import DevTools from "../components/DevTools";
import { Dispatch } from "redux";
import { AppAction } from "../actions";
import Sound from "../components/Sound";

export interface IAppProps extends IAppState {
  dispatch: Dispatch<AppAction>;
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <div>
            <ConnectedRouter history={history}>
              <Route path="*" component={Home} />
            </ConnectedRouter>
            <Sound />
          </div>
        </Provider>
        <DevTools store={store} />
      </div>
    );
  }
}