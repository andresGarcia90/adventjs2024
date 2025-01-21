/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
  const items = {
    '*': 1,
    'o': 5,
    '^': 10,
    '#': 50,
    '@': 100,
  };

  let price = 0;
  for (let i = 0; i < ornaments.length; i++) {
    const ornament = ornaments[i];
    if (!items[ornament]) return undefined;
    let value = items[ornament];

    if (i < ornaments.length - 1) {
      const nextValueOrnament = items[ornaments[i + 1]];
      if (!nextValueOrnament) return undefined;
      value = value < nextValueOrnament ? -value : value;
    }

    price += value;
  }

  return price;
}

module.exports = calculatePrice;