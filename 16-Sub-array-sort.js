function isOutOfOrder(currentNum, index, array) {
  if (index === 0) return currentNum > array[index + 1];
  if (index === array.length - 1) return currentNum < array[index - 1];
  return currentNum < array[index - 1] || currentNum > array[index + 1];
}

function subarraySort(array) {
  // Write your code here.
  let minOutOfOrder = Infinity;
  let maxOutOfOrder = -Infinity;

  for (let index = 0; index < array.length; index++) {
    const currentNum = array[index];
    if (isOutOfOrder(currentNum, index, array)) {
      minOutOfOrder = Math.min(currentNum, minOutOfOrder);
      maxOutOfOrder = Math.max(currentNum, maxOutOfOrder);
    }
  }

  if (minOutOfOrder === Infinity) {
    return [-1, -1];
  }

  let leftIdx = 0;
  let rightIdx = array.length - 1;
  while (array[leftIdx] <= minOutOfOrder) {
    leftIdx++;
  }
  while (array[rightIdx] >= maxOutOfOrder) {
    rightIdx--;
  }
  return [leftIdx, rightIdx];
}

// Do not edit the line below.
exports.subarraySort = subarraySort;
