import Chord from "../../dto/Chord";
import Pitch from "../../dto/Pitch";
import Note from "../../dto/Note";

describe('Chord', () => {
  it('can infer C Major', () => {
    const inferred = Chord.of([new Pitch(48), new Pitch(52), new Pitch(55)]);
    expect(inferred).toContainEqual(new Chord(new Note("C"), "Major"));
  });
  it('can infer C Minor', () => {
    const inferred = Chord.of([new Pitch(48), new Pitch(51), new Pitch(55)]);
    expect(inferred).toContainEqual(new Chord(new Note("C"), "Minor"));
  });
  it('can infer C Diminished', () => {
    const inferred = Chord.of([new Pitch(48), new Pitch(51), new Pitch(54)]);
    expect(inferred).toContainEqual(new Chord(new Note("C"), "Diminished"));
  });
  it('can infer C Augmented', () => {
    const inferred = Chord.of([new Pitch(48), new Pitch(52), new Pitch(56)]);
    expect(inferred).toContainEqual(new Chord(new Note("C"), "Augmented"));
  });
});