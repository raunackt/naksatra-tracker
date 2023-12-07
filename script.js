const longitudes = [
  159.3, 171.35, 183.56, 196.35, 209.36, 222.59, 236.44, 250.47, 265.3, 279.26,
  293.51, 308.12, 322.25, 336.3, 350.25, 4.11, 17.46, 31.13, 44.29, 57.34, 83.8,
  95.36, 107.5, 119.53, 131.47,
];

let bgImg = document.getElementById("bg");

function setNakshtra() {
  // calculate how many day's have passed since 6th december, 2023 = ephemeris start date
  let currentDate = new Date();
  let longToday =
    Math.floor((currentDate - new Date("2023-12-06")) / (1000 * 60 * 60 * 24)) -
    1;
  let transX = longitudes[longToday]; // get today's corresponding longitude value

  //get current time, calculate difference between NOW and sunrise and set delta accordingly
  let currentHours = new Date().getHours();
  let sunRiseForToday = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    currentDate.getDate(),
    6,
    55,
    0,
    0
  );

  // set current hours ahead by 6 hours if time is midnight so that it doesnt affect the cycle
  currentHours =
    currentHours < sunRiseForToday.getHours() ? currentHours + 6 : currentHours;
  let hoursDiff = currentHours - sunRiseForToday.getHours(); // get hours difference between now and sun rise

  // get difference between two longitudes
  let longDelta = longitudes[longToday + 1] - longitudes[longToday];
  //difference per hour
  let longDeltaHours = (longDelta / 24) * hoursDiff;

  // convert it to % along the elciptic, add the hour difference for current time
  let transXPercentage = ((transX + longDeltaHours) * 100) / 360;

  // set today's nakshtra
  bgImg.style.transform = `translateX(-${transXPercentage}%)`;

  return (transXPercentage * 6883) / 100; // convert this % to pixels for the star map, total pixels 6883
}

// setNakshtra();

// change function
const change = () => {
  let pixelsTransX = setNakshtra();
  bgImg.style.transform = `translateX(-${pixelsTransX}px)`;

  //   pixelsTransX += longDeltaHours;
};

// call change function every 1 second
setInterval(change, 1000);
