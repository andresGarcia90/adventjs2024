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


console.log(minMovesToStables([2, 6, 9], [3, 8, 5]));
console.log(minMovesToStables([1, 1, 3], [1, 8, 4]));