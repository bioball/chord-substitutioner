import Pitch from "../dto/Pitch";
import { AppAction } from "../actions";
import { Set } from "immutable";

export interface ISoundState {
  currentPlayingNotes: Set<Pitch>;
}

export const initialState: ISoundState = {
  currentPlayingNotes: Set<Pitch>()
};

export default function soundReducer (state: ISoundState = initialState, action: AppAction) {
  switch (action.type) {
    case "PLAY_PITCHES":
      return {
        currentPlayingNotes: state.currentPlayingNotes.union(action.pitches)
      };
    case "STOP_PITCHES":
      return {
        currentPlayingNotes: state
          .currentPlayingNotes
          .filterNot((pitch) => !!action.pitches.find((p) => p.value === pitch.value))
      };
    default:
      return state;
  }
}