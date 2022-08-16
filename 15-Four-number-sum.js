function fourNumberSum(array, targetSum) {
  // Write your code here.
  array.sort((a, b) => a - b);
  let leftPointer = 0;
  let rightPointer = 0;
  let result = [];

  for (let i = 0; i < array.length - 3; i++) {
    if (i != 0 && array[i] === array[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < array.length - 2; j++) {
      if (j != i + 1 && array[j] === array[j - 1]) {
        continue;
      }

      leftPointer = j + 1;
      rightPointer = array.length - 1;

      while (leftPointer < rightPointer) {
        const sum =
          array[i] + array[j] + array[leftPointer] + array[rightPointer];

        if (sum < targetSum) {
          leftPointer++;
        }

        if (sum > targetSum) {
          rightPointer--;
        }

        if (sum === targetSum) {
          result.push([
            array[i],
            array[j],
            array[leftPointer],
            array[rightPointer],
          ]);
          leftPointer++;
          rightPointer--;

          while (
            leftPointer < rightPointer &&
            array[leftPointer] === array[leftPointer + 1]
          ) {
            leftPointer++;
          }
          while (
            leftPointer < rightPointer &&
            array[rightPointer] === array[rightPointer + 1]
          ) {
            rightPointer--;
          }
        }
      }
    }
  }

  return result;
}

// Do not edit the line below.
exports.fourNumberSum = fourNumberSum;
