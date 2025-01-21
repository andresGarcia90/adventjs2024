/**
 * @typedef {Record<string, number>} GiftsCount
 */

/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
function fixGiftList(received, expected) {
  const result = {
    missing: {},
    extra: {}
  };

  const items = {};
  received.forEach(gift => {
    items[gift] = (items[gift] || 0) + 1;
  })

  expected.forEach(gift => {
    items[gift] = (items[gift] || 0) - 1;
  })

  Object.keys(items).forEach(gift => {
    if(items[gift] > 0) result.extra[gift] = items[gift];
    if(items[gift] < 0) result.missing[gift] = Math.abs(items[gift]);
  });

  return result;
}

module.exports = fixGiftList;