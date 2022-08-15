function spiralTraverse(array) {
  // Write your code here.
  let result = [];
  let minRow = 0;
  let minCol = 0;
  let maxRow = array.length - 1;
  let maxCol = array[0].length - 1;
  let total = (maxCol + 1) * (maxRow + 1); // Error for n*m size of matrix
  let count = 0;

  while (count < total) {
    // top wall
    for (let i = minRow, j = minCol; j <= maxCol && count < total; j++) {
      result.push(array[i][j]);
      count++;
    }
    minRow++;

    // left wall
    for (let i = minRow, j = maxCol; i <= maxRow && count < total; i++) {
      result.push(array[i][j]);
      count++;
    }
    maxCol--;

    // bottom wall
    for (let i = maxRow, j = maxCol; j >= minCol && count < total; j--) {
      result.push(array[i][j]);
      count++;
    }
    maxRow--;

    // console.log(maxRow, minCol,minRow, maxRow >= minRow,count,total, count < total)
    // right wall
    for (let i = maxRow, j = minCol; i >= minRow && count < total; i--) {
      console.log(array[i][j]);
      result.push(array[i][j]);
      count++;
    }
    minCol++;
  }

  return result;
}

// Do not edit the line below.
exports.spiralTraverse = spiralTraverse;
