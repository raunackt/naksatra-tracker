const longitudes = [
  158, 170.15, 182.3, 194.47, 206.63, 218.81, 230.98, 243.17, 255.35, 267.54,
  279.73, 291.92, 304.11, 316.29, 328.47, 340.64, 352.8, 4.96, 17.11, 29.25,
  41.39, 53.53, 65.66, 77.79, 89.92, 102.05, 114.19, 126.32, 138.46, 150.61,
  162.76, 174.91, 187.07, 199.24, 211.41, 223.59, 235.78, 247.97, 260.16,
  272.36, 284.56, 296.75, 308.95, 321.13, 333.31, 345.49, 357.66, 9.82, 21.98,
  34.13, 46.28, 58.43, 70.57, 82.71, 94.85, 107, 119.14, 131.29, 143.44,
];

let bgImg = document.getElementById("bg");
let nakshtraNama = document.getElementById("naksatra-nama");
let loading = document.getElementById("loading");

const DAY = 1000 * 60 * 60 * 24;

function setNakshtra() {
  // calculate how many days have passed since 1st january, 2024 = ephemeris start date
  let currentDate = convertGMTToIST(getGMTDate(new Date()));

  console.log("Current IST Date: ", currentDate)

  let longToday = Math.floor((currentDate - new Date("2024-01-01")) / DAY);
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

  //naksatra is counted at *sunrise* for a cycle, while the gregorian day changes at 0000, which has to be
  // factored in the code. A DAY will be removed from the current day's sunrise if the day has changed, i.e
  // it is past 0000 but the code not render the nakstra for the day until 0655
  let milSecDiff = 0;
  if (currentTime < sunRiseForToday.getTime()) {
    milSecDiff = currentTime - (sunRiseForToday.getTime() - DAY);
    if (currentDate.getHours() >= 5 && currentDate.getMinutes() >= 30)
      longToday = longToday - 1;
  } else milSecDiff = currentTime - sunRiseForToday.getTime(); // get time difference between now and sun rise

  let rotateZ = longitudes[longToday]; // get today's corresponding longitude value

  // get difference between two longitudes
  let longDelta = longitudes[longToday + 1] - longitudes[longToday];
  // console.log(longitudes[longToday + 1], longitudes[longToday], longDelta);
  //divide difference in milliseconds, then multiply it by how many milliseconds have passed from sunrise to now
  let longDeltaMilSec = (longDelta / DAY) * milSecDiff;

  //return moon's longitude at sunrise + however many degrees it might have changed to right now
  return rotateZ + longDeltaMilSec;
}

const change = () => {
  loading.style.opacity = "0";
  let rotateZ = setNakshtra();
  setNakshtraName(rotateZ);
  bgImg.style.transform = `rotateZ(${rotateZ}deg)`;
};


class Naksatra {
  upperBound;
  lowerBound;

  constructor(upper, lower) {
    this.upperBound = upper;
    this.lowerBound = lower;
  }
}

let Revati = new Naksatra(360, 346.67);
let Uttarabhadrapada = new Naksatra(346.66, 333.34);
let Purvabhadrapada = new Naksatra(333.33, 320);
let Shatabhisha = new Naksatra(319.99, 306.67);
let Dhanishtha = new Naksatra(306.66, 293.34);
let Shravana = new Naksatra(293.33, 280);
let Uttarashadha = new Naksatra(279.99, 266.67);
let Purvashadha = new Naksatra(266.66, 253.34);
let Mula = new Naksatra(253.33, 240);
let Jyestha = new Naksatra(239.99, 226.67);
let Anuradha = new Naksatra(226.66, 213.34);
let Vishakha = new Naksatra(213.33, 200);
let Svati = new Naksatra(199.99, 186.67);
let Chitra = new Naksatra(186.66, 173.34);
let Hasta = new Naksatra(173.33, 159.98);
let Uttaraphalguni = new Naksatra(159.97, 146.71);
let Purvaphalguni = new Naksatra(146.7, 133.34);
let Magha = new Naksatra(133.33, 119.99);
let Ashlesha = new Naksatra(119.98, 106.66);
let Pushya = new Naksatra(106.65, 93.34);
let Punarvasu = new Naksatra(93.33, 80);
let Ardra = new Naksatra(79.99, 66.34);
let Mrigashira = new Naksatra(66.66, 53.34);
let Rohini = new Naksatra(53.33, 40);
let Krittika = new Naksatra(39.99, 26.67);
let Bharani = new Naksatra(26.66, 13.4);
let Ashvini = new Naksatra(13.33, 0);

let naksatraMap = new Map();

naksatraMap.set(Revati, "रेवती");
naksatraMap.set(Uttarabhadrapada, "उत्तरभद्रपदा");
naksatraMap.set(Purvabhadrapada, "पूर्वभद्रपदा");
naksatraMap.set(Shatabhisha, "Shatabhisha");
naksatraMap.set(Dhanishtha, "धनिष्ठा");
naksatraMap.set(Shravana, "श्रवण");
naksatraMap.set(Uttarashadha, "उत्तराषाढा");
naksatraMap.set(Purvashadha, "पूर्वाषाढा");
naksatraMap.set(Mula, "मूल");
naksatraMap.set(Jyestha, "ज्येष्ठा");
naksatraMap.set(Anuradha, "अनुराधा");
naksatraMap.set(Vishakha, "विशाखा");
naksatraMap.set(Svati, "स्वाति");
naksatraMap.set(Chitra, "चित्रा");
naksatraMap.set(Hasta, "हस्त");
naksatraMap.set(Uttaraphalguni, "उत्तरफाल्गुनी");
naksatraMap.set(Purvaphalguni, "पूर्ववफाल्गुनी");
naksatraMap.set(Magha, "मघा");
naksatraMap.set(Ashlesha, "आश्लेषा");
naksatraMap.set(Pushya, "पुष्य");
naksatraMap.set(Punarvasu, "पुनर्वसु");
naksatraMap.set(Ardra, "आर्द्र");
naksatraMap.set(Mrigashira, "मृगशिर");
naksatraMap.set(Rohini, "रोहिणी");
naksatraMap.set(Krittika, "कृत्तिका ");
naksatraMap.set(Bharani, "भरणी");
naksatraMap.set(Ashvini, "अश्विनी");

function setNakshtraName(rotateVal) {
  for (const [key, value] of naksatraMap.entries()) {
    if (key.upperBound > rotateVal && rotateVal >= key.lowerBound)
      nakshtraNama.innerText = value;
  }
}

// call change function every 5 seconds
setInterval(change, 1000 * 5);

// converting date from any location to GMT
function getGMTDate(date) {
  // get the location offset from GMT in minutes
  let currentTimezoneOffset = date.getTimezoneOffset();

  // add/remove offset from the date's milliseconds
  let gmt = date.getTime() + (currentTimezoneOffset * 60 * 1000);

  // return new date based on GMT milliseconds
  return new Date(gmt);
}


// convert GMT Date to IST Date
function convertGMTToIST(gmtDate) {
  // ISTOffset with respect to GMT is -330 minutes
  // Since we have GMT Date, we need to add 330 minutes to convert GMT to IST
  const ISTOffset = 330;

  let istMillis = gmtDate.getTime() + (ISTOffset * 60 * 1000);

  // return new date based on IST milliseconds
  return new Date(istMillis);
}
