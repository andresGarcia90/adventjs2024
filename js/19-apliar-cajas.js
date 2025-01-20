/**
 * @param {number} weight - Total weight of the gifts
 * @returns {string} - Stacked boxes represented as ASCII art
 */
function distributeWeight(weight) {
  
  const boxRepresentations = {
    1: [' _ ', '|_|'],
    2: [' ___ ', '|___|'],
    5: [' _____ ', '|     |', '|_____|'],
    10: [' _________ ', '|         |', '|_________|'],
  };

  const representation = [];

  let rest = weight;
  let maxLength = 3;
  while (rest > 0) {
    
    if (rest >= 10) {
      rest -= 10;
      maxLength = Math.max(maxLength, 11);
      if (rest > 10) {
        representation.unshift([boxRepresentations[10][1], boxRepresentations[10][2]].join('\n'));
      } else {
        representation.unshift(boxRepresentations[10].join('\n'));
      }

    } else if (rest >= 5) {
      maxLength = Math.max(maxLength, 7);
      rest -= 5;
      const offset = maxLength - 7;
      if (rest > 5) {
        representation.unshift([boxRepresentations[5][1]+' '.repeat(offset), boxRepresentations[5][2]+'_'.repeat(offset)].join('\n'));
      } else {
        representation.unshift([boxRepresentations[5][0]+' '.repeat(offset), boxRepresentations[5][1]+' '.repeat(offset), boxRepresentations[5][2]+'_'.repeat(offset)].join('\n'));
      }
    } else if (rest >= 2) {
      maxLength = Math.max(maxLength, 5);
      const offset = maxLength - 5;
      rest -= 2;
      if (rest > 2) {
        representation.unshift([boxRepresentations[2][1]+' '.repeat(offset), boxRepresentations[2][2]+'_'.repeat(offset)].join('\n'));
      } else {
        representation.unshift([boxRepresentations[2][1]+'_'.repeat(offset)].join('\n'));
        // representation.unshift([boxRepresentations[2][0]+' '.repeat(offset), boxRepresentations[2][1]+'_'.repeat(offset)].join('\n'));
      }
    } else if (rest >= 1) {
      rest -= 1;
      const offset = maxLength -3;
      if (rest > 1) {
        representation.unshift([boxRepresentations[1][1]+' '.repeat(offset), boxRepresentations[1][2]+'_'.repeat(offset)].join('\n'));
      } else {
        representation.unshift([boxRepresentations[1][0]+' '.repeat(offset), boxRepresentations[1][1]+'_'.repeat(offset)].join('\n'));
      }
    }
    
  }

  // console.log(representation);
  
  // Code here
  return representation.join('\n');
}

console.log(distributeWeight(2));
