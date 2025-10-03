/**
 * Add a new daily step count, remove counts below 5000, and increase each remaining count by 1000.
 * @param {number[]} stepCounts - The array of daily step counts.
 * @param {number} newStepCount - The new daily step count to add.
 * @returns {number[]} The new array of modified step counts.
 * @example
 * updateStepCounts([4000, 7000, 3000, 8000], 6000); // returns [8000, 9000, 7000]
 */
export function updateStepCounts(stepCounts, newStepCount) {
  stepCounts.push(newStepCount)
  return stepCounts.filter(stepCount => stepCount >= 5000).map(stepCount => stepCount + 1000)
}
