import * as React from "react";
import { IAppProps } from "../containers/App";
import { midiLoaded } from "../actions/loaderActions";
import { replace } from "react-router-redux";
import connectedComponent from "../util/connectedComponent";

@connectedComponent
export default class Loader extends React.Component<IAppProps> {

  componentWillMount () {
    MIDI.loadPlugin({
      instruments: ["acoustic_grand_piano", "choir_aahs", "string_ensemble_1", "synth_choir", "woodblock", "xylophone"],
      soundfontUrl: "soundfonts/",
      onsuccess: () => {
        this.props.dispatch(midiLoaded());
        this.props.dispatch(replace("/"));
      }
    });
  }

  render () {
    return <div>Loading...</div>;
  }

}