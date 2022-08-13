function isValidSubsequence(array, sequence) {
  // Write your code here.
  // if(array.length === sequence.length) return false
  const setSequence = [...new Set(sequence)];

  const mappedArr = new Map();
  array.forEach((item, idx) => {
    mappedArr.set(item, idx);
  });
  let count = 0;
  for (let seqItem of setSequence) {
    if (mappedArr.has(seqItem)) {
      count++;
    }
  }

  return count === sequence.length;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
