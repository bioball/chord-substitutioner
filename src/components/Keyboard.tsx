import * as React from 'react';
import '../styles/Keyboard.sass';
import { IAppProps } from "../containers/App";
import pitches from "../constants/pitches";
import Pitch from "../dto/Pitch";
import * as soundActions from "../actions/soundActions";
import * as classnames from "classnames";
import * as _ from "lodash";

const octave = [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1];

export default class Keyboard extends React.Component<IAppProps> {

  onKeyDown = (pitch: Pitch) => () => {
    this.props.dispatch(soundActions.playPitch(pitch));
  }

  onKeyUp = (pitch: Pitch) => () => {
    this.props.dispatch(soundActions.stopPitch(pitch));
  }

  pitchIsPlayed (pitch: Pitch) {
    return !!_.find(this.props.sound.currentPlayingNotes, (p: Pitch) => p.value === pitch.value);
  }

  key = (pitch: Pitch) => {
    const natural = octave[pitch.value % 12];
    const cname = classnames({
      "keyboard__key": true,
      "keyboard__key--natural": !!natural,
      "keyboard__key--accidental": !natural,
      "keyboard__key--active": this.pitchIsPlayed(pitch)
    });
    return (
      <div 
        className={cname}
        key={pitch.value}
        onMouseDown={this.onKeyDown(pitch)}
        onMouseUp={this.onKeyUp(pitch)}
      />
    );
  }

  keys () {
    return pitches.map(this.key);
  }

  render () {
    return (
      <div className="keyboard">
        {
          this.keys()
        }
      </div>
    );
  }
}