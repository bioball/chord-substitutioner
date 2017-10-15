import { IAppProps } from "../containers/App";
import * as React from "react";
import { createConnectedComponent } from "../util/connectedComponent";

export interface IPlayingSoundState {
  [pitch: number]: boolean;
}

export class Sound extends React.Component<IAppProps, IPlayingSoundState> {

  currentPlayingSounds: IPlayingSoundState = {};

  componentWillMount () {
    MIDI.setVolume(0, 127);
  }

  componentWillReceiveProps (props: IAppProps) {
    for (let pitch of props.sound.currentPlayingNotes) {
      if (this.currentPlayingSounds[pitch.value]) {
        continue;
      }
      this.currentPlayingSounds[pitch.value] = true;
      MIDI.noteOn(0, pitch.value, 127, 0);
    }
    Object.keys(this.currentPlayingSounds).forEach((note) => {
      if (props.sound.currentPlayingNotes.find((p) => p.value === parseInt(note, 10))) {
        return;
      }
      this.currentPlayingSounds[note] = false;
      MIDI.noteOff(0, parseInt(note, 10), 0);
    });
  }
  
  render () {
    return null;
  }
}
export default createConnectedComponent(Sound);