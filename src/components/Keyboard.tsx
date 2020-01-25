import React from 'react';
import '../styles/Keyboard.sass';
import { IAppProps } from "../containers/App";
import pitches from "../constants/pitches";
import Pitch from "../dto/Pitch";
import * as soundActions from "../actions/soundActions";
import classnames from "classnames";

const naturals = [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1];

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

  onMouseDown = (pitch: Pitch) => (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.preventDefault();
    this.isKeyDown = true;
    this.props.dispatch(soundActions.playPitch(pitch));
  }

  onMouseUp = (pitch: Pitch) => () => {
    this.isKeyDown = false;
    this.props.dispatch(soundActions.stopPitch(pitch));
  }

  key = (pitch: Pitch) => {
    const natural = naturals[pitch.value % 12];
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
        onMouseDown={this.onMouseDown(pitch)}
        onMouseUp={this.onMouseUp(pitch)}
        onMouseEnter={this.onMouseEnter(pitch)}
        onMouseLeave={this.onMouseLeave(pitch)}
      />
    );
  }

  pitchIsPlayed (pitch: Pitch) {
    return !!this.props.sound.currentPlayingNotes.find((p) => p.value === pitch.value);
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