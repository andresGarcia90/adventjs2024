
/**
 * Fixes the packages string by flipping the order of characters
 * between matching parentheses.
 *
 * @param {string} packages
 * @returns {string}
 */
function fixPackages(packages) {
  const stack = [];
  const result = packages.split('');
  for (let i = 0; i < result.length; i++) {
    if (result[i] === '(') {
      stack.push(i);
    } else if (result[i] === ')') {
      const openIndex = stack.pop();
      const subPackage = result.slice(openIndex + 1, i).reverse();
      result.splice(openIndex, i - openIndex + 1, ...subPackage);
      i = openIndex + subPackage.length - 1;
    }
  }

  return result.join('');
}

module.exports = fixPackages;