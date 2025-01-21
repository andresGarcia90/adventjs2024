/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {
  const levels1 = [];
  const queue1 = [[tree1, 0]];
  while (queue1.length > 0) {
    const [node, level] = queue1.shift();
    if (levels1.length <= level) {
      levels1.push([]);
    }
    levels1.push(node.value);
    if (node.left) { queue1.push([node.left, level + 1]); }
    if (node.right) { queue1.push([node.right, level + 1]); }
  }

  // console.log(levels1);
  

  return [false, tree1.value];
}

const tree1 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' },
};

const tree2 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '⭐' },
};

// console.log(isTreesSynchronized(tree1, tree2)); // [true, '🎄']

module.exports = isTreesSynchronized;
