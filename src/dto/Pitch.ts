/**
 * A MIDI pitch.
 */
export default class Pitch {
  /**
   * @param value The MIDI value of the pitch
   */
  constructor (public value: number) {
  }

  octave () {
    return Math.abs(this.value / 12);
  }

}