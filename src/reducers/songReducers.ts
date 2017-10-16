import { Seq } from "immutable";
import Chord from "../dto/Chord";
import Pitch from "../dto/Pitch";
import Duration from "../dto/Duration";
import { AppAction } from "../actions";

export interface ISongState {
  chords: Seq.Indexed<Chord>;
}

const CMajor = new Chord("C", "Major");
const AMinor = new Chord("A", "Minor");
const FMajor = new Chord("F", "Major");
const GMajor = new Chord("G", "Major");

export const initialState: ISongState = {
  chords: Seq.Indexed([CMajor, AMinor, FMajor, GMajor])
};

export default function songReducer (state: ISongState = initialState, action: AppAction) {
  return state;
}