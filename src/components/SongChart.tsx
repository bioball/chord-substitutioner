import * as React from "react";
import { IAppProps } from "../containers/App";
import Chord from "../dto/Chord";
import PlayHead from "./PlayHead";
import { playChord } from "../actions/soundActions";
import "../styles/SongChart.sass";

export interface ISongChartState {
  playing: boolean;
  queue: Chord[];
  currentPlayingChord?: Chord;
}

export default class SongChart extends React.Component<IAppProps, ISongChartState> {

  state = { playing: false, queue: [] };

  play = () => {
    this.setState({ playing: true });
    // this.props.dispatch(playChord())
  }

  chord = (chord: Chord, idx: number) => {
    return <li className="song-chart__chord" key={idx}>{chord.prettyName()}</li>;
  }

  render () {
    return <div>
      <ul className="song-chart">
        {this.props.song.chords.map(this.chord)}
      </ul>
      <PlayHead {...this.props} onPlay={this.play}/>
    </div>;
  }
}