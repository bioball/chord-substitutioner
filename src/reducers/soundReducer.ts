import Pitch from "../dto/Pitch";
import { AppAction } from "../actions";
import { differenceBy } from "lodash";

export interface ISoundState {
  currentPlayingNotes: Pitch[];
}

export default function soundReducer (state: ISoundState = { currentPlayingNotes: [] }, action: AppAction) {
  switch (action.type) {
    case "PLAY_PITCHES":
      return {
        currentPlayingNotes: action.pitches
      };
    case "STOP_PITCHES":
      return {
        currentPlayingNotes: differenceBy(state.currentPlayingNotes, action.pitches, (pitch) => pitch.value)
      };
    default:
      return state;
  }
}