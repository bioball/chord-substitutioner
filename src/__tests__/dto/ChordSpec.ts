import Chord from "../../dto/Chord";
import Pitch from "../../dto/Pitch";

describe('Chord', () => {
  it('can infer C Major', () => {
    const inferred = Chord.of([new Pitch(48), new Pitch(52), new Pitch(55)]);
    expect(inferred).toContainEqual(new Chord("C", "Major"));
  });
  it('can infer C Minor', () => {
    const inferred = Chord.of([new Pitch(48), new Pitch(51), new Pitch(55)]);
    expect(inferred).toContainEqual(new Chord("C", "Minor"));
  });
  it('can infer C Diminished', () => {
    const inferred = Chord.of([new Pitch(48), new Pitch(51), new Pitch(54)]);
    expect(inferred).toContainEqual(new Chord("C", "Diminished"));
  });
  it('can infer C Augmented', () => {
    const inferred = Chord.of([new Pitch(48), new Pitch(52), new Pitch(56)]);
    expect(inferred).toContainEqual(new Chord("C", "Augmented"));
  });
});