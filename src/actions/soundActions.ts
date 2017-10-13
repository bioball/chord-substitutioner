/* tslint:disable forin */
import { Dispatch } from "redux";
import { AppAction } from "./index";
import groupBy = require('lodash/groupBy');
import Pitch from "../dto/Pitch";

export interface IPlayNotesAction {
  type: "PLAY_PITCHES";
  pitches: Pitch[];
}

export interface IStopPlayNotesAction {
  type: "STOP_PITCHES";
  pitches: Pitch[];
}

export type SoundAction = IPlayNotesAction | IStopPlayNotesAction;

/**
 * Plays a group of notes. Will dispatch an action immediately to play the notes,
 * and schedules actions to stop playing each note based on duration.
 */
export const playNotes = (dispatch: Dispatch<AppAction>) => (pitches: Pitch[]) => {
  dispatch({
    type: "PLAY_PITCHES",
    pitches
  });
  const grouped = groupBy(pitches, 'duration');
  for (let duration in grouped) {
    setTimeout(
      () => dispatch({
        type: "STOP_PITCHES",
        pitches: grouped[duration]
      }), 
      parseInt(duration, 10)
    );
  }
};

export const playPitch = (pitch: Pitch) => {
  return {
    type: "PLAY_PITCHES",
    pitches: [pitch]
  };
};

export const stopPitch = (pitch: Pitch) => {
  return {
    type: "STOP_PITCHES",
    pitches: [pitch]
  };
};