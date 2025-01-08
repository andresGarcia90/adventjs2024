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
    } else if (instruction  === '+') {
      value += 1;
      i += 1;
    } else if (instruction === '-') {
      value -= 1;
      i += 1;
    } else if (instruction === '['){
      if (value === 0) {
        while (code[i] !== ']') {
          i += 1;
        }
      } 
      i += 1;
    } else if (instruction === '{') {}


  }
  

  return value;
}
  

console.log(execute('+++'));
