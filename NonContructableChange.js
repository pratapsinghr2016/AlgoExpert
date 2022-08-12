function nonConstructibleChange(coins) {
  // Write your code here.
  const sortedArr = coins.sort((a, b) => a - b);
  let changeCount = 0;
  let changeCantBeCreated = 1;
  let valueAbsent = false;

  if (!coins.length) return changeCantBeCreated;

  for (let coin of coins) {
    if (changeCount + 1 >= coin) {
      changeCount += coin;
    } else {
      changeCantBeCreated = changeCount + 1;
      valueAbsent = true;
      break;
    }
  }

  return valueAbsent ? changeCantBeCreated : changeCount + 1;
}

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;
