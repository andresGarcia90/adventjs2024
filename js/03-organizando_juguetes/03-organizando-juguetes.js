
/**
 * Process an array of toys and return an object that organizes
 * the toys by category and name.
 *
 * @param {object[]} inventory - An array of objects, where each
 * object has the properties:
 *     - category: The category of the toy
 *     - name: The name of the toy
 *     - quantity: The quantity of the toy
 *
 * @returns {object} - An object with the categories as keys, and
 * values that are objects with the toy names as keys and the
 * quantities as values
 */
function organizeInventory(inventory) {
  const organizedInventory = {};

  inventory.forEach(({category, name, quantity}) => {
    organizedInventory[category] ||= {};
    organizedInventory[category][name] = (organizedInventory[category][name] || 0) + quantity;
  });

  return organizedInventory;
};

module.exports = organizeInventory;