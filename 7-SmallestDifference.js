function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  const sortedArrayOne = arrayOne.sort((a, b) => a - b);
  const sortedArrayTwo = arrayTwo.sort((a, b) => a - b);

  let arrayOneIdx = 0;
  let arrayTwoIdx = 0;
  let lowestDiff = Infinity;
  let result = [];

  while (
    arrayOneIdx < sortedArrayOne.length &&
    arrayTwoIdx < sortedArrayTwo.length
  ) {
    let arrayOneItem = sortedArrayOne[arrayOneIdx];
    let arrayTwoItem = sortedArrayTwo[arrayTwoIdx];

    let diff = Math.abs(arrayOneItem - arrayTwoItem);
    if (diff < lowestDiff) {
      lowestDiff = diff;
      result = [arrayOneItem, arrayTwoItem];
    }

    if (arrayOneItem < arrayTwoItem) {
      arrayOneIdx++;
    }

    if (arrayOneItem > arrayTwoItem) {
      arrayTwoIdx++;
    }

    if (arrayOneItem === arrayTwoItem) {
      break;
    }
  }

  return result;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
