/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {
  let value = 0;
  let i = 0;
  let length = code.length;

  while (i < length) {
    const instruction = code[i];
    if (instruction === '>') {
      i += 1;
    } else if (instruction === '+') {
      value += 1;
      i += 1;
    } else if (instruction === '-') {
      value -= 1;
      i += 1;
    } else if (instruction === ']') {
      value = 0;
      i += 1;
    } else if (instruction === '{') {
      if (value === 0) {
        const restOfInstruction = code.split('').slice(i);
        const indexOfBracket = restOfInstruction.findIndex(x => x === '}');
        i += indexOfBracket + 1;
      } else {
        i += 1;
      }
    } else if (instruction === '[' || instruction === '}') {
      i +=1;
    }
  }
  return value;
}

console.log(execute('{+}{+}{+}'));
