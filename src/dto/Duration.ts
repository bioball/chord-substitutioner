export interface IDuration {
  numerator: number;
  denominator: number;
}

export default function Duration (numerator: number, denominator: number): IDuration {
  return {
    numerator,
    denominator
  };
}