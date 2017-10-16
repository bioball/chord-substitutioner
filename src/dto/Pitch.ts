const notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

/**
 * A MIDI pitch.
 * @param value {number} The MIDI value of the pitch
 */
export default class Pitch {

  name: string;

  octave: number;

  constructor (public value: number) {
    // this.name = value % 
  }

}
