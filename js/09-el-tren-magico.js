/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
  let trainPosition = {x: 0, y: 0};

  for (let i = 0; i < board.length; i++) {
    const yPosition = board[i].indexOf('@');
    if (yPosition > -1) {
      trainPosition = {x: i, y: yPosition};
      break;
    }
  }
  
  if (mov === 'U') {
    trainPosition.x -= 1;
  } else if (mov === 'D') {
    trainPosition.x += 1;
  } else if (mov === 'R') {
    trainPosition.y += 1;
  } else if (mov === 'L') {
    trainPosition.y -= 1;
  }

  if (trainPosition.x < 0 || trainPosition.y < 0 || trainPosition.x >= board.length || trainPosition.y >= board[0].length) {
    return 'crash';
  }

  if(board[trainPosition.x][trainPosition.y] === '*') {
    return 'eat';
  }

  if(board[trainPosition.x][trainPosition.y] === 'o') {
    return 'crash';
  }

  return 'none';
}

// '·····'
// '*····'
// '@····'
// 'o····'
// 'o····'
const board = ['·····', '*····', '@····', 'o····', 'o····'];
console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha

