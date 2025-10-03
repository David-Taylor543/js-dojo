/**
 * Convert each temperature from Celsius to Fahrenheit in a weather app.
 * @param {number[]} tempsCelsius - The array of temperatures in Celsius.
 * @returns {number[]} The new array of temperatures in Fahrenheit.
 * @example
 * convertToFahrenheit([0, 20, 30]); // returns [32, 68, 86]
 */
export function convertToFahrenheit(tempsCelsius) {
  // Formula: (Celsius * 9/5) + 32
  return tempsCelsius.map(celsius => (celsius * 9/5) + 32)
}
