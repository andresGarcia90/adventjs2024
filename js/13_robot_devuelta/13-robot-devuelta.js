/** @param {string} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
  const currentPosition = [0, 0];
  moves.split('').forEach((move, index) => {
    const preMov = index >= 0 ? moves[index - 1] : null;
    const flagDouble = preMov === '*';
    const flagInvert = preMov === '!';
    const flagOnlyOne = preMov === '?' && move === moves[index - 2];
    switch (move) {
      case 'L':
        currentPosition[0] -= 1;
        if (flagDouble) currentPosition[0] -= 1;
        if (flagInvert) currentPosition[0] += 2;
        if (flagOnlyOne) currentPosition[0] += 1;
        break;
      case 'R':
        currentPosition[0] += 1;
        if (flagDouble) currentPosition[0] += 1;
        if (flagInvert) currentPosition[0] -= 2;
        if (flagOnlyOne) currentPosition[0] -= 1;
        break;
      case 'U':
        currentPosition[1] += 1;
        if (flagDouble) currentPosition[1] += 1;
        if (flagInvert) currentPosition[1] -= 2;
        if (flagOnlyOne) currentPosition[1] -= 1;
        break;
      case 'D':
        currentPosition[1] -= 1;
        if (flagDouble) currentPosition[1] -= 1;
        if (flagInvert) currentPosition[1] += 2;
        if (flagOnlyOne) currentPosition[1] += 1;
        break;
      default:
        break;
    }
  })
  return currentPosition[0] === 0 && currentPosition[1] === 0 ? true : currentPosition;
}

module.exports = isRobotBack;