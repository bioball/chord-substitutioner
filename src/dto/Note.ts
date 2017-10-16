/* tslint:disable:switch-default */
import Pitch from "./Pitch";

export type Accidental = "natural" | "sharp" | "flat" | "double-sharp" | "double-flat";
export type NoteName = "A" | "B" | "C" | "D" | "E" | "F" | "G";

const naturals = [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1];
const noteNames = ["C", "D", "E", "F", "G", "A", "B"];

/**
 * A Note represents the musical notation of a pitch.
 *
 * A♯ and B♭ are the same pitch, but different notes.
 */
export default class Note {

  /**
   * The pitch representation of the note.
   */
  pitch: Pitch;

  /**
   * Given just a [[Pitch]], return all possible [[Note]]s.
   */
  static fromPitch (pitch: Pitch): Note[] {
    const octave = Math.floor((pitch.value / 12)) - 1;
    const distanceToBase = pitch.value % 12;
    const notes = Note.getNoteName(pitch);
    return notes.map((name, idx) => {
      if (noteNames.length === 1) {
        return new Note(name, octave, "natural")
      }
      const accidental = idx ? "flat" : "sharp";
      return new Note(name, octave, accidental);
    });
  }

  static getNoteName (pitch: Pitch): NoteName[] {
    switch (pitch.value % 12) {
      case 0:
        return ["C"];
      case 1:
        return ["C", "D"];
      case 2:
        return ["D"];
      case 3:
        return ["D", "E"];
      case 4:
        return ["E"];
      case 5:
        return ["F"];
      case 6:
        return ["F", "G"];
      case 7:
        return ["G"];
      case 8:
        return ["G", "A"];
      case 9:
        return ["A"];
      case 10:
        return ["A", "B"];
      case 11:
        return ["B"];
      default:
        throw new Error("Somehow got an interval lower than 12.");
    }
  }
  
  constructor (
    public name: NoteName,
    public octave: number,
    public accidental: Accidental
  ) {
    this.pitch = this.getPitch();
  }

  getPitch () {
    return new Pitch((this.octave + 1) * 12 + this.getIntervalFromNote() + this.getAccidentalModifier());
  }

  getIntervalFromNote (): number {
    switch (this.name) {
      case 'C':
        return 0;
      case 'D':
        return 2;
      case 'E':
        return 4;
      case 'F':
        return 5;
      case 'G':
        return 7;
      case 'A':
        return 9;
      case 'B':
        return 11;
    }
  }

  getAccidentalModifier () {
    switch (this.accidental) {
      case "natural":
        return 0;
      case "sharp":
        return 1;
      case "flat":
        return -1;
      case "double-sharp":
        return 2;
      case "double-flat":
        return -2;
    }
  }

  getName () {
    return `${ this.name }/${ this.getAccidental() }`;
  }

  getAccidental () {
    switch (this.accidental) {
      case "sharp":
        return "♯";
      case "flat":
        return "♭";
      case "double-sharp":
        return "♯♯";
      case "double-flat":
        return "♭♭";
      default:
        return "";
    }
  }
}