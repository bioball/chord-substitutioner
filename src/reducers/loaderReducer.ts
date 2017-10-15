import { AppAction } from "../actions";

export interface ILoaderState {
  midi: boolean;
}

export const initialState: ILoaderState = {
  midi: false
};

export default function (state: ILoaderState = initialState, action: AppAction) {
  switch (action.type) {
    case "MIDI_LOADED":
      return {
        ...state,
        midi: true
      };
    default:
      return state;
  }
}