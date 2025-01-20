function createXmasTree(height, ornament) {
  const width = height * 2 - 1; 
  const tree = [];

  for (let i = 0; i < height; i++) {
    const ornaments = ornament.repeat(2 * i + 1);
    const padding = '_'.repeat((width - ornaments.length) / 2);
    tree.push(`${padding}${ornaments}${padding}`);
  }


  const trunk = '_'.repeat((width - 1) / 2) + '#' + '_'.repeat((width - 1) / 2);
  tree.push(trunk, trunk);

  return tree.join('\n');
}

module.exports = createXmasTree;