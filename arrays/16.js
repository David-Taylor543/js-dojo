/**
 * Calculate the discounted prices for a sale in an e-commerce store.
 * @param {number[]} prices - The array of original product prices.
 * @param {number} discount - The discount percentage to apply.
 * @returns {number[]} The new array of discounted prices.
 * @example
 * applyDiscount([100, 200, 300], 10); // returns [90, 180, 270]
 */
export function applyDiscount(prices, discount) {
  // Formula: price - (price * discount / 100)
  return prices.map(price => price - (price * discount / 100))
}
