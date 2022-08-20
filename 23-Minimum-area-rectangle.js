function getArea(p1, p2, set) {
  const p3 = [p1[0], p2[1]];
  const p4 = [p2[0], p1[1]];

  if (set.has(p3.toString()) && set.has(p4.toString())) {
    const length = Math.abs(p2[0] - p1[0]);
    const breadth = Math.abs(p2[1] - p1[1]);
    return length * breadth;
  }
  return Infinity;
}

function minimumAreaRectangle(points) {
  // Write your code here.
  let miniMumArea = Infinity;
  let set = new Set();

  for (let point of points) {
    set.add(point.toString());
  }

  for (let p1 of points) {
    for (let p2 of points) {
      if (p1[0] !== p2[0] && p1[1] !== p2[1]) {
        miniMumArea = Math.min(miniMumArea, getArea(p1, p2, set));
      }
    }
  }

  return miniMumArea === Infinity ? 0 : miniMumArea;
}

// Do not edit the line below.
exports.minimumAreaRectangle = minimumAreaRectangle;
