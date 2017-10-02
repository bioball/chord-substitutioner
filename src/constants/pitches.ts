/**
 * A MIDI pitch.
 */
export class Pitch {
  /**
   * @param value The MIDI value of the pitch
   */
  constructor (public value: number) {
  }

  octave () {
    return Math.abs(this.value / 12);
  }

}

const pitches = Array(127).fill(0).map((_, i) => new Pitch(i + 1));

export default pitches;