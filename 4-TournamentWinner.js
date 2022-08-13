function tournamentWinner(competitions, results) {
  // Write your code here.
  const comptetorMap = new Map();
  let winnerPoints = 0;
  let winnerName = "";
  let points = 3;
  let idx = 0;

  for (let item of results) {
    const currentComptetionWinnerIdx = item === 0 ? 1 : 0;
    const currentComptetionWinner =
      competitions[idx][currentComptetionWinnerIdx];

    if (!comptetorMap.has(currentComptetionWinner)) {
      comptetorMap.set(currentComptetionWinner, points);
    } else {
      const currentPoints = comptetorMap.get(currentComptetionWinner) + 3;
      comptetorMap.set(currentComptetionWinner, currentPoints);
    }
    if (comptetorMap.get(currentComptetionWinner) > winnerPoints) {
      winnerPoints = comptetorMap.get(currentComptetionWinner);
      winnerName = currentComptetionWinner;
    }
    idx += 1;
  }

  return winnerName;
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
