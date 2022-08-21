function getGCD(num1, num2) {
  // GCD calculator
  let a = num1;
  let b = num2;
  while (true) {
    if (a == 0) {
      return b;
    }
    if (b == 0) {
      return a;
    }
    [a, b] = [b, a % b];
  }
}

function getSlope(p1, p2) {
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  // WHY [1, 0] ??
  let slope = [1, 0]; // slope for vertical lines

  if (x1 !== x2) {
    // for not vertical lines
    let xDiff = x2 - x1;
    let yDiff = y2 - y1;
    const gcdOfDiffs = getGCD(Math.abs(xDiff), Math.abs(yDiff)); // absolute number's GCD
    xDiff = Math.floor(xDiff / gcdOfDiffs);
    yDiff = Math.floor(yDiff / gcdOfDiffs);
    // moving - to numerator
    if (xDiff < 0) {
      xDiff *= -1;
      yDiff *= -1;
    }
    slope = [yDiff, xDiff];
  }
  return slope;
}

function getRationalKey(rise, run) {
  return rise + ":" + run;
}

function lineThroughPoints(points) {
  // Write your code here.
  let maxNumberOfPoints = 1;

  for (let idx1 = 0; idx1 < points.length; idx1++) {
    const p1 = points[idx1];
    const keyMap = new Map();
    for (let idx2 = idx1 + 1; idx2 < points.length; idx2++) {
      const p2 = points[idx2];
      const [rise, run] = getSlope(p1, p2);
      const rationalizedSlopeKey = getRationalKey(rise, run);

      if (!keyMap.has(rationalizedSlopeKey)) {
        keyMap.set(rationalizedSlopeKey, 1);
      }
      let temp = keyMap.get(rationalizedSlopeKey) + 1;
      keyMap.set(rationalizedSlopeKey, temp);
    }

    const mapKeysArr = Array.from(keyMap.values()); // values not keys as keys are like '1:2'
    let maxTemp = Math.max(...mapKeysArr, 0); // double comparision
    maxNumberOfPoints = Math.max(maxNumberOfPoints, maxTemp); // default=0 how ??
  }

  return maxNumberOfPoints;
}

// Do not edit the line below.
exports.lineThroughPoints = lineThroughPoints;
