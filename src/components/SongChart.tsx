import * as React from "react";
import { IAppProps } from "../containers/App";
import Chord from "../dto/Chord";

export default class SongChart extends React.Component<IAppProps> {

  chord = (chord: Chord, idx: number) => {
    return <li key={idx}>{chord.prettyName()}</li>;
  }

  render () {
    return <ul>
      {this.props.song.chords.map(this.chord)}
    </ul>;
  }
}