/**
 * @param {{ value: string; left: any; right: any }} tree
 * @returns {number} - Height of the tree.
 */
function treeHeight(tree) {
  // Write your code here
  if (!tree) return 0;
  let height = 0;
  const queue = [tree];
  while (queue.length > 0) {
    const numberOfNodes = queue.length;
    for (let i = 0; i < numberOfNodes; i++) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    height++;
  }

  return height;
}

const tree = {
  value: '🎁',
  left: {
    value: '🎄',
    left: {
      value: '⭐',
      left: null,
      right: null,
    },
    right: {
      value: '🎅',
      left: null,
      right: null,
    },
  },
  right: {
    value: '❄️',
    left: null,
    right: {
      value: '🦌',
      left: null,
      right: null,
    },
  },
};

console.log(treeHeight(tree));
