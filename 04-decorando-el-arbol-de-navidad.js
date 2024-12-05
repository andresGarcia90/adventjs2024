function createXmasTree(height, ornament) {
  const arrayOfOrnaments = [];
  if (height >= 1 && height <= 100) {
    const lengthOfLine = height * 2 - 1;
    for (let i = 1; i <= height; i++) {
      const numberOfOrnaments = 2 * i - 1;
      const offset = Math.floor((lengthOfLine - numberOfOrnaments) / 2);
      arrayOfOrnaments.push(
        '_'.repeat(offset) +
          ornament.repeat(numberOfOrnaments) +
          '_'.repeat(offset)
      );
    }
    const offsetOfSticks = Math.floor((lengthOfLine - 1) / 2);
    arrayOfOrnaments.push(
      '_'.repeat(offsetOfSticks) + '#' + '_'.repeat(offsetOfSticks)
    );
    arrayOfOrnaments.push(
      '_'.repeat(offsetOfSticks) + '#' + '_'.repeat(offsetOfSticks)
    );
  }
  return arrayOfOrnaments.join('\n');
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