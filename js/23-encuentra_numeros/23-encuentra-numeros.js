/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
  // Code here
  const max = Math.max(...nums);
  const missingNumbers=[];
  for(let i=1; i< max; i++ ){
    if (!nums.find(x => x === i)){
      missingNumbers.push(i)
    }
  }
  return missingNumbers
}
  