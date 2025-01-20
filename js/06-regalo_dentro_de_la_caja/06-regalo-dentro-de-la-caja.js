
/**
 * Checks if a present (*) is inside a box.
 *
 * @param {string[]} box - Box as a 2D array of strings.
 * @returns {boolean} - Whether the present is inside the box.
 */
function inBox(box) {
  for (let j = 1; j < box.length - 1; j++) {
    const line = box[j];
    const presentIndex = line.indexOf('*');
    if (presentIndex === -1) continue;
    if (presentIndex === 0 || presentIndex === line.length - 1) return false;
    return true;
  }
  return false;
}

module.exports = inBox;