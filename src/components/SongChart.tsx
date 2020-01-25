import React from "react";
import { IAppProps } from "../containers/App";
import Chord from "../dto/Chord";
import PlayHead from "./PlayHead";
import { playChord, stopChord } from "../actions/soundActions";
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
    this.handlePlayChords(this.props.song.chords);
  }

  handlePlayChords (chords: Chord[], idx: number = 0): void {
    const current = chords[0];
    this.props.dispatch(playChord(current));
    setTimeout(() => {
      this.props.dispatch(stopChord(current));
      if (chords.length > 1 && this.state.playing) {
        return this.handlePlayChords(chords.slice(1), idx + 1);
      } else {
        this.setState({ playing: false });
      }
    }, (current.duration.numerator / current.duration.denominator) * 1000);
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