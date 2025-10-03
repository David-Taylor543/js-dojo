/**
 * Add a new temperature reading, remove readings below 60, and convert each remaining reading to Celsius.
 * @param {number[]} tempsFahrenheit - The array of temperature readings in Fahrenheit.
 * @param {number} newTempFahrenheit - The new temperature reading to add.
 * @returns {number[]} The new array of modified temperatures in Celsius.
 * @example
 * updateTemperatures([59, 65, 72, 50], 68); // returns [18.3333, 22.2222, 20]
 * //(Celsius * 9/5) + 32
 */
export function updateTemperatures(tempsFahrenheit, newTempFahrenheit) {
  tempsFahrenheit.push(newTempFahrenheit)
  return tempsFahrenheit.filter(temps => temps >= 60).map(temps => (temps - 32) * (5/9))
}
