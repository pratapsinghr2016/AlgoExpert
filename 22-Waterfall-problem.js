function waterfallStreams(array, source) {
  // Write your code here.
  let rowAbove = [...array[0]];
  rowAbove[source] = -1;

  for (let index = 1; index < array.length; index++) {
    let currentRow = [...array[index]];

    for (let idx = 0; idx < rowAbove.length; idx++) {
      let aboveValue = rowAbove[idx];

      const hasWater = aboveValue < 0;
      const currentlyFacingBlock = currentRow[idx] === 1;

      if (!hasWater) {
        continue;
      }

      if (!currentlyFacingBlock) {
        currentRow[idx] += aboveValue; // water flowed down
        continue;
      }

      const splitWater = aboveValue / 2;
      let rightIdx = idx + 1;
      while (rightIdx < rowAbove.length) {
        if (rowAbove[rightIdx] === 1) {
          break;
        }
        if (currentRow[rightIdx] !== 1) {
          currentRow[rightIdx] += splitWater; // water flowed down
          break;
        }
        rightIdx++;
      }

      let leftIdx = idx - 1;

      while (leftIdx >= 0) {
        if (rowAbove[leftIdx] === 1) {
          break;
        }

        if (currentRow[leftIdx] !== 1) {
          currentRow[leftIdx] += splitWater; // water flowed down
          break;
        }
        leftIdx--;
      }
    }
    rowAbove = currentRow;
  }
  const finalPercentRow = rowAbove.map((item) => item * -100);
  return finalPercentRow;
}

// Do not edit the line below.
exports.waterfallStreams = waterfallStreams;
