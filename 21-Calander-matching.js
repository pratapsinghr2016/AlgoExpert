function getToMinutesCalander(calanderArr) {
  const arr = calanderArr.map((item) => {
    [start, end] = item;
    const startTime = start.split(":");
    const endTime = end.split(":");
    const startMinutes = Number(startTime[0]) * 60 + Number(startTime[1]);
    const endMinutes = Number(endTime[0]) * 60 + Number(endTime[1]);
    return [startMinutes, endMinutes];
  });
  return arr;
}

function updateCalander(calander, dailyBounds) {
  let newCalander = [];
  newCalander[0] = ["0:00", dailyBounds[0]];
  newCalander = [...newCalander, ...calander];
  newCalander.push([dailyBounds[1], "23:59"]);
  const toMinutesCalander = getToMinutesCalander(newCalander);
  return toMinutesCalander;
}

function getMergedCalnders(calander1, calander2) {
  let mergedArr = [];
  let i = 0;
  let j = 0;
  while (i < calander1.length && j < calander2.length) {
    const meeting1 = calander1[i];
    const meeting2 = calander2[j];
    if (meeting1[0] < meeting2[0]) {
      mergedArr.push(meeting1);
      i++;
    } else {
      mergedArr.push(meeting2);
      j++;
    }
  }

  while (i < calander1.length) {
    mergedArr.push(calander1[i]);
    i++;
  }

  while (j < calander2.length) {
    mergedArr.push(calander2[j]);
    j++;
  }
  return mergedArr;
}

function getFlattenedCalander(calanders) {
  let flattenedArr = [[...calanders[0]]]; // first value
  for (let index = 0; index < calanders.length; index++) {
    let currentMeeting = calanders[index];
    let prevMeeting = flattenedArr[flattenedArr.length - 1];
    const [currentStart, currentEnd] = currentMeeting;
    const [prevStart, prevEnd] = prevMeeting;
    // note
    if (prevEnd >= currentStart) {
      // overlap
      let newPrevMeeting = [prevStart, Math.max(prevEnd, currentEnd)];
      flattenedArr[flattenedArr.length - 1] = newPrevMeeting;
    } else {
      flattenedArr.push(currentMeeting); // TODO
    }
  }
  return flattenedArr;
}

function getMatchingAvailability(calanders, requiredDuration) {
  let matchingAvailability = [];
  for (let index = 1; index < calanders.length; index++) {
    let start = calanders[index - 1][1]; // end time of 1st timespan
    let end = calanders[index][0]; // start of 2nd timespan
    const availableDurationInAboveCalander = end - start;
    if (availableDurationInAboveCalander >= requiredDuration) {
      matchingAvailability.push([start, end]);
    }
  }
  return matchingAvailability;
}

function getMinutesToHour(minutes) {
  const hoursStr = Math.floor(minutes / 60);
  let minutesStr = minutes % 60;
  minutesStr = minutesStr < 10 ? "0" + minutesStr : minutesStr;
  return hoursStr + ":" + minutesStr;
}

function getFormattedAvailability(availabilites) {
  const formattedArr = availabilites.map((item) => {
    const [start, end] = item;
    const startTime = getMinutesToHour(start);
    const endTime = getMinutesToHour(end);
    return [startTime, endTime];
  });
  return formattedArr;
}

function calendarMatching(
  calendar1,
  dailyBounds1,
  calendar2,
  dailyBounds2,
  meetingDuration
) {
  // Write your code here.
  const updatedCalander1 = updateCalander(calendar1, dailyBounds1);
  const updatedCalander2 = updateCalander(calendar2, dailyBounds2);
  const mergedCalnders = getMergedCalnders(updatedCalander1, updatedCalander2);
  const flattenedCalander = getFlattenedCalander(mergedCalnders);
  const matchingAvailability = getMatchingAvailability(
    flattenedCalander,
    meetingDuration
  );
  const formattedAvailability = getFormattedAvailability(matchingAvailability);
  return formattedAvailability;
}

// Do not edit the line below.
exports.calendarMatching = calendarMatching;
