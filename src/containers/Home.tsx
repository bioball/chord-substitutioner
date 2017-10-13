import { IAppProps } from "./App";
import * as React from "react";
import connectedComponent from "../util/connectedComponent";
import Keyboard from "../components/Keyboard";

@connectedComponent
export default class Home extends React.Component<IAppProps> {
  render () {
    return (
      <div className="app">
        <Keyboard {...this.props} />
      </div>
    );
  }
}