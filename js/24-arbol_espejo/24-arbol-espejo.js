/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {
  const queue1 = [[tree1, 0]];
  const queue2 = [[tree2, 0]];
  const elem1 = {};
  const elem2 = {};
  let result = [true, tree1.value ?? ''];

  while (queue1.length > 0) {
    const [node, level] = queue1.shift();
    const [node2, level2] = queue2.shift();

    elem1[level] = elem1[level] ? [...elem1[level], node.value] : [node.value];
    elem2[level2] = elem2[level2]
      ? [...elem2[level2], node2.value]
      : [node2.value];

    if (node.left) {
      queue1.push([node.left, level + 1]);
    }
    if (node.right) {
      queue1.push([node.right, level + 1]);
    }

    if (node2.left) {
      queue2.push([node2.left, level2 + 1]);
    }
    if (node2.right) {
      queue2.push([node2.right, level2 + 1]);
    }
  }

  Object.keys(elem1).forEach((value, index) => {
    if (elem1[value].toString() !== elem2[value].reverse().toString()) {
      result = [false, tree1.value];
    }
  });

  return result;
}

console.log(isTreesSynchronized({
  value: '🎄',
  left: { value: '⭐' }
},{
  value: '🎄',
  right: { value: '⭐' },
}))

module.exports = isTreesSynchronized;
