export interface IMidiLoadedAction {
  type: "MIDI_LOADED";
}

export type LoaderAction = IMidiLoadedAction;

export const midiLoaded = (): IMidiLoadedAction => {
  return {
    type: "MIDI_LOADED"
  };
};