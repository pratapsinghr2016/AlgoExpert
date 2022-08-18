function getIdxAtMinValue(array) {
  let idxMinValue = 0;
  let minValue = Infinity;
  for (let index = 0; index < array.length; index++) {
    const currentValue = array[index];
    if (currentValue < minValue) {
      minValue = currentValue;
      idxMinValue = index;
    }
  }
  return idxMinValue;
}

function apartmentHunting(blocks, reqs) {
  // Write your code here.
  let maxDistanceArray = [];
  for (let index = 0; index < blocks.length; index++) {
    maxDistanceArray[index] = -Infinity;
  }

  for (let i = 0; i < blocks.length; i++) {
    for (let req of reqs) {
      let closestReqDistance = Infinity;
      for (let j = 0; j < blocks.length; j++) {
        if (blocks[j][req]) {
          closestReqDistance = Math.min(closestReqDistance, Math.abs(i - j));
        }
      }
      maxDistanceArray[i] = Math.max(maxDistanceArray[i], closestReqDistance);
    }
  }
  return getIdxAtMinValue(maxDistanceArray);
}

// Do not edit the line below.
exports.apartmentHunting = apartmentHunting;
