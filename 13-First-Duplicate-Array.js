function firstDuplicateValue(array) {
  // Write your code here.
  let map = new Map();
  let count = 0;

  while (count < array.length) {
    if (!map.has(array[count])) {
      map.set(array[count], count);
      count++;
    } else {
      break;
    }
  }

  return count === array.length ? -1 : array[count];
}

// Do not edit the line below.
exports.firstDuplicateValue = firstDuplicateValue;
