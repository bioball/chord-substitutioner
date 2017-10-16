import { IDuration } from "./Duration";
import { NoteName } from "./Note";
import Pitch from "./Pitch";
import Note from "./Note";
import { flatMap, range, last } from "lodash";
import Duration from "./Duration";

export interface IInterval {
  distance: number;
  quality: 'major' | 'minor' | 'perfect';
}

export type Quality = "Major" | "Minor" | "Augmented" | "Diminished";

/**
 * A group of notes, musically speaking. I'm not keeping track of the exact notes that
 * the chord should be representing.
 * 
 * TODO: Handle additional notes; 7ths, 9ths etc.
 */
export default class Chord {

  /**
   * Infers the chord based on the pitches passed in.
   * 
   * 1. determine the possible names of all notes
   * 2. for each letter in a normal scale, find a root triad. Tack on any additions necessary
   */
  static of = (pitches: Pitch[], duration: IDuration = Duration(1, 1)): Chord[] => {
    const possibleNotes = flatMap(pitches, Note.fromPitch);
    const thirds = ["F", "A", "C", "E", "G", "B", "D"];
    
    const tripets = thirds.map((name) => {
      return !!possibleNotes.find((note) => note.name === name);
    });

    // for each note, traverse up the list and try to determine if a root triad exists.
    const triads = thirds.reduce(
      (list: Note[][], name, idx) => {
        const notes: Note[] = [];
        const target = idx + 3;
        while (idx++ < target) {
          const currNote = thirds[idx];
          const member = possibleNotes.find((note) => note.name === currNote);
          if (!member) {
            return list;
          }
          notes.push(member);
        }
        return list.concat([notes]);
      },
      []
    );

    return triads.map((chord) => {
      const name = chord[0].name;
      const quality = Chord.getQuality(chord);
      return new Chord(name, quality, duration);
    });
  }

  static getQuality (notes: Note[]): Quality {
    const intervals = notes
      .reduce((res: number[], note, idx) => {
        if (idx === 0) {
          return [note.getIntervalFromC()];
        }
        let interval = note.getIntervalFromC();
        if (res[idx - 1] > interval) {
          interval += 12;
        }
        return res.concat([interval]);
      }, [])
      .map((nums) => nums - notes[0].getIntervalFromC())
      .slice(1)
      .join("");
    switch (intervals) {
      case "47":
        return "Major";
      case "37":
        return "Minor";
      case "36":
        return "Diminished";
      case "48":
        return "Augmented";
      default:
        throw new Error("Somehow couldnt figre out the quality of this chord. Intervals were " + intervals);
    }
  }

  constructor (
    public name: NoteName,
    public quality: Quality,
    public duration: IDuration = Duration(1, 1)
  ) {}

  prettyName () {
    const quality = {
      "Major": "",
      "Minor": "m",
      "Diminished": "dim",
      "Augmented": "+"
    };
    return `${ this.name }${ quality[this.quality] }`;
  }

}