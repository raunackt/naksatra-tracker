const longitudes = [
  158, 170.15, 182.3, 194.47, 206.63, 218.81, 230.98, 243.17, 255.35, 267.54,
  279.73, 291.92, 304.11, 316.29, 328.47, 340.64, 352.8, 4.96, 17.11, 29.25,
  41.39, 53.53, 65.66, 77.79, 89.92, 102.05, 114.19, 126.32, 138.46, 150.61,
];

let bgImg = document.getElementById("bg");
let nakshtraNama = document.getElementById("naksatra-nama");

function setNakshtra() {
  // calculate how many day's have passed since 0th january, 2024 = ephemeris start date
  let currentDate = new Date();
  let longToday =
    Math.floor((currentDate - new Date("2024-01-01")) / (1000 * 60 * 60 * 24)) -
    1;
  let rotateZ = longitudes[longToday]; // get today's corresponding longitude value

  //get current time, calculate difference between NOW and sunrise and set delta accordingly
  let currentTime = new Date().getTime();
  let sunRiseForToday = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    6,
    55,
    0,
    0
  );
  // set current hours ahead by 6 hours if time is midnight so that it doesnt affect the cycle
  // currentHours =
  //   currentHours < sunRiseForToday.getHours() ? currentHours + 6 : currentHours;
  let milSecDiff = currentTime - sunRiseForToday.getTime(); // get time difference between now and sun rise

  // get difference between two longitudes
  let longDelta = longitudes[longToday + 1] - longitudes[longToday];
  //difference per hour
  let longDeltaMilSec = (longDelta / (24 * 60 * 60 * 1000)) * milSecDiff;

  // convert it to % along the elciptic, add the hour difference for current time
  // let rotateZPercentage = ((rotateZ + longDeltaHours) * 100) / 360;

  // // set today's nakshtra
  // bgImg.style.transform = `translateX(-${rotateZPercentage}%)`;

  //return (transXPercentage * 6883) / 100; // convert this % to pixels for the star map, total pixels 6883
  // console.log(rotateZ + longDeltaMilSec);
  return rotateZ + longDeltaMilSec;
}

// function setNakshtraName() {
//   let rotateZ = setNakshtra();

  

//   return 0;
// }

// setNakshtra();

// change function
const change = () => {
  let rotateZ = setNakshtra();
  if (rotateZ > 338) nakshtraNama.innerText = "Revati";
  else if (rotateZ > 304) nakshtraNama.innerText = "Uttarabhadrapada";
  else if (rotateZ > 292) nakshtraNama.innerText = "Purvabhadrapada";
  else if (rotateZ > 280) nakshtraNama.innerText = "Shatabhisha";
  else if (rotateZ > 268) nakshtraNama.innerText = "Dhanistha";
  else if (rotateZ > 256) nakshtraNama.innerText = "Shravana";
  else if (rotateZ > 244) nakshtraNama.innerText = "Uttarashadha";
  else if (rotateZ > 232) nakshtraNama.innerText = "Purvashadha";
  else if (rotateZ > 220) nakshtraNama.innerText = "Mula";
  else if (rotateZ > 208) nakshtraNama.innerText = "Jyestha";
  else if (rotateZ > 196) nakshtraNama.innerText = "Anuradha";
  else if (rotateZ > 184) nakshtraNama.innerText = "Vishakha";
  else if (rotateZ > 172) nakshtraNama.innerText = "Svati";
  else if (rotateZ > 160) nakshtraNama.innerText = "Chitra";
  else if (rotateZ > 148) nakshtraNama.innerText = "Hasta";
  else if (rotateZ > 136) nakshtraNama.innerText = "Uttaraphalguni";
  else if (rotateZ > 124) nakshtraNama.innerText = "Purvaphalguni";
  else if (rotateZ > 112) nakshtraNama.innerText = "Magha";
  else if (rotateZ > 100) nakshtraNama.innerText = "Ashlesha";
  else if (rotateZ > 88) nakshtraNama.innerText = "Pushya";
  else if (rotateZ > 76) nakshtraNama.innerText = "Punarvasu";
  else if (rotateZ > 64) nakshtraNama.innerText = "Ardra";
  else if (rotateZ > 52) nakshtraNama.innerText = "Mrigashira";
  else if (rotateZ > 40) nakshtraNama.innerText = "Rohini";
  else if (rotateZ > 27) nakshtraNama.innerText = "Krittika";
  else if (rotateZ > 13) nakshtraNama.innerText = "Bharani";
  else if (rotateZ > 0) nakshtraNama.innerText = "Ashvini";
  bgImg.style.transform = `rotateZ(-${rotateZ}deg)`;

  //   pixelsTransX += longDeltaHours;
};

// call change function every 1 second
setInterval(change, 1000);
// setInterval(setNakshtraName, 1000);
