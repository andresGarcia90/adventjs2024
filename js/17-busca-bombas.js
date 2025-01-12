/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
  const gridX = grid.length;
  const gridY = grid[0].length;
  const mapOfBombs = Array.from({ length: gridX }, () => Array(gridY).fill(0));

  console.log(mapOfBombs);
  
  for (let x = 0; x < gridX; x++) {
    for (let y = 0; y < gridY; y++) {
      
      if(grid[x][y]){
        for (let i = x - 1; i <= x + 1; i++) {
          for (let j = y - 1; j <= y + 1 ; j++) {
            // console.log(i , j, gridX, gridY);
            const isAdjacent = i !== x || j !== y;
            if ( i >= 0 && i < gridX && j >= 0 && j < gridY && isAdjacent) {  
              console.log(i , j, mapOfBombs[i][j])
              mapOfBombs[i][j] = mapOfBombs[i][j] + 1;
            }
          }
          
        }
      }

    }
  }

  return mapOfBombs;
}
  

console.log(detectBombs([
  [true, false],
  [false, false]
]));
