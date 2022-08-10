// SOLUTION 1

function twoNumberSum(array, targetSum) {
  // Write your code here.
  const arr = array;
  const tempTarget = targetSum;
  let i = 0;
  let result = [];

  while (i < arr.length) {
    let picked = arr[i];
    for (let index = i + 1; index < arr.length; index++) {
      if (picked + arr[index] === tempTarget) {
        result.push(arr[index]);
        result.push(picked);
        break;
      }
    }
    i += 1;
  }
  return result;
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;

// SOLUTION 2

function twoNumberSum(array, targetSum) {
  // Write your code here.
  const set = new Set();

  for (let item of array) {
    const complement = targetSum - item;
    if (set.has(complement)) {
      return [item, complement];
    }
    set.add(item);
  }
  return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;

// SOLUTION 3

function twoNumberSum(array, targetSum) {
  // Write your code here.
  const temp = { [array[0]]: true };
  for (let i = 1; i < array.length; i++) {
    console.log(temp);
    if (temp[targetSum - array[i]]) {
      return [targetSum - array[i], array[i]];
    } else {
      temp[array[i]] = true;
    }
  }
  return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
