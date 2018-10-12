import * as constants from './constants.js';

export class NextBirthday {
  constructor(birthDay) {
    this.birthDay = new Date(birthDay);
    this.birthDayMonth = this["birthDay"].getMonth();
    this.birthDayDate = this["birthDay"].getDate();
  }

  earthDayUntilBirthday() {
    let dayUntilNextBirthday = 0;
    let nextBirthDayYear = 0;
    let today = new Date(Date.now());
    if (today.getMonth() <= this.birthDayMonth && today.getUTCDate() < this.birthDayDate) {
      nextBirthDayYear = today.getFullYear();
    } else {
      nextBirthDayYear = today.getFullYear() + 1;
    }
    dayUntilNextBirthday = (new Date(nextBirthDayYear,this.birthDayMonth,this.birthDayDate) - today-1) / (constants.secondsInDay * 1000);
    return Math.ceil(dayUntilNextBirthday);
  }

  getNextBirthday(planet) {
    let daysLeftInEarth = this.earthDayUntilBirthday();
    let daysLeftInPlanet = 0;
    switch(planet) {
    case "mercury":
      daysLeftInPlanet = daysLeftInEarth * constants.mercuryToEarth;
      break;
    case "venus":
      daysLeftInPlanet = daysLeftInEarth * constants.venusToEarth;
      break;
    case "earth":
      daysLeftInPlanet = daysLeftInEarth;
      break;
    case "mars":
      daysLeftInPlanet = daysLeftInEarth * constants.marsToEarth;
      break;
    case "jupiter":
      daysLeftInPlanet = daysLeftInEarth * constants.jupiterToEarth;
      break;
    }
    return Math.ceil(daysLeftInPlanet);
  }
}
