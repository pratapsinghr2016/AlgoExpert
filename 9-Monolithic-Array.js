function isMovingUp(curr, next) {
  return curr < next;
}

function isMovingDown(curr, next) {
  return curr > next;
}

/*
 *
 * Use < or > instead >= and <=
 * index < array.length-1
 * count++ is source of truth
 *
 */

function isMonotonic(array) {
  // Write your code here
  let direction = "";
  if (array.length === 0 || array.length === 1) {
    return true;
  }

  let count = 0;
  for (let index = 0; index < array.length - 1; index++) {
    if (isMovingUp(array[index], array[index + 1])) {
      if (direction === "down") {
        direction = "";
        break;
      } else {
        direction = "up";
      }
    }

    if (isMovingDown(array[index], array[index + 1])) {
      if (direction === "up") {
        direction = "";
        break;
      } else {
        direction = "down";
      }
    }
    count++;
  }

  return count === array.length - 1;
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;
