/**
 * Remove the first element and add it to the end of the array.
 * @param {number[]} ages - The array of ages.
 * @returns {number[]} The updated array of ages.
 * @example
 * shiftAllAges([30, 25, 20, 35, 40]); // returns [25, 20, 35, 40, 30]
 */
export function shiftAllAges(ages) {
  const firstAge = ages[0]
  ages.shift()
  ages.push(firstAge)
  return ages
}
