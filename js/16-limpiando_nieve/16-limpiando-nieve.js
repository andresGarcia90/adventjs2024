/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s) {
  let canReduce = true;
  let newSnow = s;
  while (canReduce) {
    canReduce = false;
    for (let i = 0; i < newSnow.length - 1; i++) {
      if (newSnow[i] === newSnow[i + 1]) {
        newSnow = newSnow.slice(0, i) + newSnow.slice(i + 2);
        canReduce = true;
        break;
      }
    }
  }
  return newSnow;
}

module.exports = removeSnow;
