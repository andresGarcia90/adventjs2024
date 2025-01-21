/**
 * @param {number[]} reindeer
 * @param {number[]} stables
 * @returns {number}
 */
function minMovesToStables(reindeer, stables) {
  reindeer.sort((a, b) => a - b);
  stables.sort((a, b) => a - b);
  let movements = 0;
  
  for (let index = 0; index < reindeer.length; index++) {
    movements += Math.abs(reindeer[index] - stables[index]);
  }
  return movements;
}

module.exports = minMovesToStables;