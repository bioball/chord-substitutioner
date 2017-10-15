import Pitch from "../dto/Pitch";
import { range } from "lodash";

const pitches = range(21, 109).map((i) => new Pitch(i));

export default pitches;