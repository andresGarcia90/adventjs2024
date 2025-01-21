/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
  const [, ...rest] = filename.split("_");
  const second = rest.join("_").split(".");
  second.pop()
  return second.join(".");
}

module.exports = decodeFilename;