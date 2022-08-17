function isOutofBound(row, col, maxRow, maxCol) {
  return row < 0 || row > maxRow || col < 0 || col > maxCol; // need to check
}

function zigzagTraverse(array) {
  // Write your code here.
  let maxRow = array.length - 1;
  let maxCol = array[0].length - 1;
  let row = 0;
  let col = 0;
  let goingDown = true;
  let result = [];

  while (!isOutofBound(row, col, maxRow, maxCol)) {
    result.push(array[row][col]);
    if (goingDown) {
      if (col === 0 || row === maxRow) {
        goingDown = false;
        if (row === maxRow) {
          col++;
        } else {
          row++;
        }
      } else {
        row++;
        col--;
      }
    } else {
      if (row === 0 || col === maxCol) {
        goingDown = true;
        if (col === maxCol) {
          row++;
        } else {
          col++;
        }
      } else {
        row--;
        col++;
      }
    }
  }
  return result;
}

// Do not edit the line below.
exports.zigzagTraverse = zigzagTraverse;
