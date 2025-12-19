import seedrandom from "seedrandom";

export const normalize = (
  value,
  currentScaleMin,
  currentScaleMax,
  newScaleMin = 0,
  newScaleMax = 1
) => {
  const standardNormalization =
    (value - currentScaleMin) / (currentScaleMax - currentScaleMin);

  return (
    (newScaleMax - newScaleMin) * standardNormalization + newScaleMin
  );
};

export const shuffleWithSeed = (array, seed) => {
  const result = [...array];
  const rng = seedrandom(seed);

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
};
