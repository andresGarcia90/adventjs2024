/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
  const map = {};
  let index = 0;

  while (index < instructions.length) {
    
    
    const instruction = instructions[index].split(' ');
    if (instruction[0] === "MOV") {
      const variableX = instruction[1];
      const variableY = instruction[2];
      const isNumber = !isNaN(parseFloat(variableX)) && isFinite(variableX);
      map[variableY] = isNumber ? parseInt(variableX) : (map[variableX] ?? 0);
      index++;
    }

    if (instruction[0] === "INC") {
      const variableX = instruction[1];
      if(parseInt(map[variableX])){
        map[variableX] = parseInt(map[variableX]) + 1;  
      } else {
        map[variableX] = (map[variableX] ?? 0) + 1;
      }
      
      // map[variableX] = (parseInt(map[variableX]) ?? 0) + 1;

      index++;
    }

    if (instruction[0] === "DEC") {
      const variableX = instruction[1];
      if (parseInt(map[variableX])) {
        map[variableX] = parseInt(map[variableX]) - 1;
      } else {
        map[variableX] = (map[variableX] ?? 0) - 1;
      }
      // map[variableX] =  (parseInt(map[variableX]) ?? 0) - 1;
      index++;

    }

    if (instruction[0] === "JMP") {
      const variableX = instruction[1];
      const variableY = instruction[2];
      if((map[variableX] ?? 0) === 0) {
        index = parseInt(variableY);
      } else {
        index++;
      }
    }
  }
  return  map["A"] ?? undefined;
}

// const instructions = [
//   'MOV -1 C', // copia -1 al registro 'C',
//   'INC C', // incrementa el valor del registro 'C'
//   'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
//   'MOV C A', // copia el registro 'C' al registro 'a',
//   'INC A' // incrementa el valor del registro 'a'
// ]


const instructions = compile([
  "INC A",
  "INC A",
  "DEC A",
  "MOV A B",
])
// console.log(compile(instructions));

console.log(compile(instructions));