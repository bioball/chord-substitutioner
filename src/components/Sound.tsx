import { IAppProps } from "../containers/App";
import React from "react";
import { createConnectedComponent } from "../util/connectedComponent";
import { Set } from "immutable";
import Pitch from "../dto/Pitch";

/**
 * Plays all the sounds found in the store.
 */
export class Sound extends React.Component<IAppProps> {

  currentPlayingSounds: Set<Pitch> = Set();

  componentWillMount () {
    MIDI.setVolume(0, 127);
  }

  componentWillReceiveProps (props: IAppProps) {
    props.sound.currentPlayingNotes.subtract(this.currentPlayingSounds)
      .forEach((pitch) => {
        MIDI.noteOn(0, pitch.value, 127, 0);
      });
    this.currentPlayingSounds.subtract(props.sound.currentPlayingNotes)
      .forEach((pitch) => {
        MIDI.noteOff(0, pitch.value, 0);
      });
    this.currentPlayingSounds = props.sound.currentPlayingNotes;
  }

  render () {
    return null;
  }
}

export default createConnectedComponent(Sound);