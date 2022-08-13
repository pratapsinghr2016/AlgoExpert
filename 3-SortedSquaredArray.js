// SortedSquaredArray

function sortedSquaredArray(array) {
  // Write your code here.
  let toBeSorted = false;
  const res = array.map((item) => {
    if (item < 0) toBeSorted = true;
    return Math.pow(item, 2);
  });

  if (!toBeSorted) return res;
  return res.sort((a, b) => a - b);
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
