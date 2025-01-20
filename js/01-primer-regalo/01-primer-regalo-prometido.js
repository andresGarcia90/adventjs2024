/**
 * 
 * @param {number[]} gifts - List of gifts
 * @returns {number[]} - Sorted array of unique gifts
 */

function prepareGifts(gifts) {
  return [...new Set(gifts.sort((a, b) => a - b)) ]
}

module.exports = prepareGifts