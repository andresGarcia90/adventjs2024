/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
  const listOfGift = [];

  function getCombinations(sI, currSet) {
    for (let i = sI; i < gifts.length; i++) {
      currSet.push(gifts[i]);
      listOfGift.push([...currSet]);
      getCombinations(i + 1, currSet);
      currSet.pop();
    }
  }

  getCombinations(0, []);
  return listOfGift.sort((a, b) => a.length - b.length);
}

// console.log(generateGiftSets(['car']));
// console.log(generateGiftSets(['1', '2']));
// console.log(generateGiftSets(['1', '2', '3']));
console.log(generateGiftSets(['1', '2', '3', '4']));
