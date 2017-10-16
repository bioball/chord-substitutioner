import { Seq } from "immutable";
import Chord from "../dto/Chord";
import Pitch from "../dto/Pitch";
import Duration from "../dto/Duration";
import { AppAction } from "../actions";
import Note from "../dto/Note";

export interface ISongState {
  chords: Chord[];
}

const CMajor = new Chord(new Note("C"), "Major");
const AMinor = new Chord(new Note("A"), "Minor");
const FMajor = new Chord(new Note("F"), "Major");
const GMajor = new Chord(new Note("G"), "Major");

export const initialState: ISongState = {
  chords: [CMajor, AMinor, FMajor, GMajor]
};

export default function songReducer (state: ISongState = initialState, action: AppAction) {
  return state;
}