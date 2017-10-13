import Pitch from "../dto/Pitch";

const pitches = Array(127).fill(0).map((_, i) => new Pitch(i + 1));

export default pitches;