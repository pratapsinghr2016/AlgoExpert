function minRewards(scores) {
  // Write your code here.
  const mapObj = new Map();
  const mapObj2 = new Map();
  for (let score of scores) {
    mapObj.set(score, 1);
    mapObj2.set(score, 1);
  }

  // left to right
  for (let index = 1; index < scores.length; index++) {
    const currItem = scores[index];
    const prevItem = scores[index - 1];
    if (prevItem < currItem) {
      const newPrevItemVal = mapObj2.get(prevItem) + 1;
      mapObj2.set(currItem, newPrevItemVal);
    }
  }

  // right to left
  for (let index = scores.length - 2; index >= 0; index--) {
    const currItem = scores[index];
    const nextItem = scores[index + 1];
    if (nextItem < currItem) {
      const newNextItemVal = mapObj.get(nextItem) + 1;
      mapObj.set(currItem, newNextItemVal);
    }
  }

  let maxCount = 0;

  for (let index = 0; index < scores.length; index++) {
    maxCount =
      maxCount +
      Math.max(mapObj.get(scores[index]), mapObj2.get(scores[index]));
  }

  return maxCount;
}

// Do not edit the line below.
exports.minRewards = minRewards;
