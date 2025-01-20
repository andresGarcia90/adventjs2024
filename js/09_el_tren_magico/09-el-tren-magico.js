/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
  let trainPosition = {x: 0, y: 0};

  if (mov === 'U') {
    trainPosition.x -= 1;
  } else if (mov === 'D') {
    trainPosition.x += 1;
  } else if (mov === 'R') {
    trainPosition.y += 1;
  } else if (mov === 'L') {
    trainPosition.y -= 1;
  }


  for (let i = 0; i < board.length; i++) {
    if (board[i].indexOf('@') > -1) {
      const x = i + trainPosition.x;
      const y = board[i].indexOf('@') + trainPosition.y;
      if (x < 0 || y < 0 || x >= board.length || y >= board[0].length || board[x][y] === 'o') {
        return 'crash';
      }
      if(board[x][y] === '*') {
        return 'eat';
      }
      return 'none';
    }
  }

}

module.exports = moveTrain;