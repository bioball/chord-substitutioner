export interface IMidiLoadedAction {
  type: "MIDI_LOADED";
}

export type LoaderAction = IMidiLoadedAction;

export const midiLoaded = () => {
  return {
    type: "MIDI_LOADED"
  };
};