// 6-ThreeNumberSum

function sum(currentItem, leftPointerItem, rightPointerItem) {
  return currentItem + leftPointerItem + rightPointerItem;
}

function threeNumberSum(array, targetSum) {
  // Write your code here.
  const sortedArr = array.sort((a, b) => a - b);

  let result = [];
  let idx = 1;

  for (let item of sortedArr) {
    let leftPointer = idx;
    let rightPointer = array.length - 1;

    while (leftPointer < rightPointer) {
      let leftItem = sortedArr[leftPointer];
      let rightItem = sortedArr[rightPointer];

      let sumVal = sum(item, leftItem, rightItem);
      if (sumVal > targetSum) {
        rightPointer--;
      }
      if (sumVal < targetSum) {
        leftPointer++;
      }
      if (sumVal === targetSum) {
        result.push([item, leftItem, rightItem]);
        leftPointer++;
        rightItem--;
      }
    }

    idx++;
  }

  return result;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
