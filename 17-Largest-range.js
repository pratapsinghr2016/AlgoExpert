function largestRange(array) {
  // Write your code here.
  const mapObj = new Map();
  let longestRangeLength = 0;
  let result = [];

  for (let index = 0; index < array.length; index++) {
    const key = array[index];
    mapObj.set(key, false);
  }

  for (let index = 0; index < array.length; index++) {
    let key = array[index];
    if (mapObj.get(key)) {
      continue;
    }
    mapObj.set(key, true);
    let leftRange = key - 1;
    let rightRange = key + 1;
    let rangeLength = 0;

    while (mapObj.has(leftRange)) {
      mapObj.set(leftRange, true);
      rangeLength++;
      leftRange--;
    }

    while (mapObj.has(rightRange)) {
      mapObj.set(rightRange, true);
      rangeLength++;
      rightRange++;
    }
    if (rangeLength >= longestRangeLength) {
      longestRangeLength = rangeLength;
      result = [leftRange + 1, rightRange - 1];
    }
  }
  return result;
}

// Do not edit the line below.
exports.largestRange = largestRange;
