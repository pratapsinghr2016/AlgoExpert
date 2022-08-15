function longestPeak(array) {
  // Write your code here.
  let longestStreak = 0;
  let currentStreak = 0;

  for (let index = 1; index < array.length - 1; index++) {
    const isPeak =
      array[index] > array[index - 1] && array[index] > array[index + 1];
    if (isPeak) {
      currentStreak = getStreak(array, index);
      if (currentStreak > longestStreak) {
        longestStreak = currentStreak;
      }
    }
  }

  return longestStreak;
}

function getStreak(array, pointer) {
  let leftPointer = pointer;
  let rightPointer = pointer;

  while (array[leftPointer - 1] < array[leftPointer]) {
    leftPointer--;
  }

  while (array[rightPointer + 1] < array[rightPointer]) {
    rightPointer++;
  }

  return rightPointer - leftPointer + 1;
}

// Do not edit the line below.
exports.longestPeak = longestPeak;
