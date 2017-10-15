import * as React from 'react';
import '../styles/Keyboard.sass';
import { IAppProps } from "../containers/App";
import pitches from "../constants/pitches";
import Pitch from "../dto/Pitch";
import * as soundActions from "../actions/soundActions";
import * as classnames from "classnames";

const octave = [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1];

export default class Keyboard extends React.Component<IAppProps> {

  isKeyDown = false;

  onMouseEnter = (pitch: Pitch) => () => {
    if (this.isKeyDown) {
      this.props.dispatch(soundActions.playPitch(pitch));
    }
  }

  onMouseLeave = (pitch: Pitch) => () => {
    if (this.isKeyDown) {
      this.props.dispatch(soundActions.stopPitch(pitch));
    }
  }

  onKeyDown = (pitch: Pitch) => () => {
    this.isKeyDown = true;
    this.props.dispatch(soundActions.playPitch(pitch));
  }

  onKeyUp = (pitch: Pitch) => () => {
    this.isKeyDown = false;
    this.props.dispatch(soundActions.stopPitch(pitch));
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
        onMouseEnter={this.onMouseEnter(pitch)}
        onMouseLeave={this.onMouseLeave(pitch)}
      />
    );
  }

  pitchIsPlayed (pitch: Pitch) {
    return this.props.sound.currentPlayingNotes.contains(pitch);
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