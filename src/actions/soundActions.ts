/* tslint:disable forin */
import { Dispatch } from "redux";
import { AppAction } from "./index";
import groupBy from "lodash/groupBy";
import Pitch from "../dto/Pitch";
import Chord from "../dto/Chord";

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
export const playChord = (chord: Chord): IPlayNotesAction => {
  return {
    type: "PLAY_PITCHES",
    pitches: chord.toPitches()
  };
};

export const stopChord = (chord: Chord): IStopPlayNotesAction => {
  return {
    type: "STOP_PITCHES",
    pitches: chord.toPitches()
  };
};

export const playPitch = (pitch: Pitch): IPlayNotesAction => {
  return {
    type: "PLAY_PITCHES",
    pitches: [pitch]
  };
};

export const stopPitch = (pitch: Pitch): IStopPlayNotesAction => {
  return {
    type: "STOP_PITCHES",
    pitches: [pitch]
  };
};