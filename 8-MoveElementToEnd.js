function moveElementToEnd(array, toMove) {
  // Write your code here.
  const sortedArr = array.sort((a, b) => a - b);
  let firstIndex = sortedArr.indexOf(toMove);
  let lastIndex = firstIndex;

  if (firstIndex < 0) {
    return sortedArr;
  }

  while (sortedArr[lastIndex] === toMove) {
    lastIndex++;
  }

  while (firstIndex < lastIndex && lastIndex < sortedArr.length) {
    let temp = sortedArr[firstIndex];
    sortedArr[firstIndex] = sortedArr[lastIndex];
    sortedArr[lastIndex] = temp;
    firstIndex++;
    lastIndex++;
  }

  return sortedArr;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
