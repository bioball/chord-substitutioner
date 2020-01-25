import { IAppProps } from "./App";
import React from "react";
import connectedComponent from "../util/connectedComponent";
import Keyboard from "../components/Keyboard";
import Sound from "../components/Sound";
import PlayHead from "../components/PlayHead";
import SongChart from "../components/SongChart";

@connectedComponent
export default class Home extends React.Component<IAppProps> {
  render () {
    return (
      <div className="app">
        <Sound {...this.props} />
        <Keyboard {...this.props} />
        <SongChart {...this.props} />
      </div>
    );
  }
}