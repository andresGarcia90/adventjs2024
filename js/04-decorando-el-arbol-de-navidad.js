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


const tree = createXmasTree(5, '*')
console.log(tree)
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, '+')
console.log(tree2)
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, '@')
console.log(tree3)
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/