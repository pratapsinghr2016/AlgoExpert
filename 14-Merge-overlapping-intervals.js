function removeFromIdx(array, idx) {
  return array.filter((item, index) => index !== idx);
}

function mergeOverlappingIntervals(array) {
  // Write your code here.

  array.sort((a, b) => a[0] - b[0]);

  let sortedArrByFirstEl = [array[0]]; // error
  let mergerPointer = 0; // error

  for (let index = 1; index < array.length; index++) {
    // error
    const [start, end] = sortedArrByFirstEl[mergerPointer]; // error // error
    const [nextStart, nextEnd] = array[index]; // error
    const isOverLapping = end >= nextStart;
    if (isOverLapping) {
      const newEnd = Math.max(end, nextEnd);
      sortedArrByFirstEl[mergerPointer] = [start, newEnd];
    } else {
      sortedArrByFirstEl.push(array[index]);
      mergerPointer++; // error
    }
  }

  return sortedArrByFirstEl;
}

// Do not edit the line below.
exports.mergeOverlappingIntervals = mergeOverlappingIntervals;
