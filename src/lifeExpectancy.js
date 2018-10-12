import { AgeCalculator } from './AgeCalculator.js';
import * as constants from './constants.js';

export class lifeExpectancy {
  constructor(birthDay) {
    this.earthAge = new AgeCalculator(birthDay).earthAgeCalculator();
    this.mercuryAge = new AgeCalculator(birthDay).mercuryAgeCalculator();
    this.venusAge = new AgeCalculator(birthDay).venusAgeCalculator();
    this.marsAge = new AgeCalculator(birthDay).marsAgeCalculator();
    this.jupiterAge = new AgeCalculator(birthDay).jupiterAgeCalculator();
  }

  earthLifeExpectancy(smoking, alcohol, genetics, obesity, relationship) {
    let lifeExpectancy = 78;
    smoking? lifeExpectancy  -= 8: lifeExpectancy;
    alcohol? lifeExpectancy  -= 6: lifeExpectancy;
    genetics? lifeExpectancy  += 4: lifeExpectancy;
    relationship? lifeExpectancy  += 3: lifeExpectancy;
    return lifeExpectancy;
  }

  getLeftLife(planet, smoking, alcohol, genetics, obesity, relationship) {
    let earthlifeExpectancy = this.earthLifeExpectancy(smoking, alcohol, genetics, obesity, relationship);
    let leftLife = 0;
    switch(planet) {
    case "mercury":
      leftLife = earthlifeExpectancy/constants.mercuryToEarth - this.mercuryAge;
      break;
    case "venus":
      leftLife = earthlifeExpectancy/ constants.venusToEarth - this.venusAge;
      break;
    case "earth":
      leftLife = earthlifeExpectancy - this.earthAge;
      break;
    case "mars":
      leftLife = earthlifeExpectancy/ constants.marsToEarth - this.marsAge;
      break;
    case "jupiter":
      leftLife = earthlifeExpectancy/ constants.jupiterToEarth - this.jupiterAge;
      break;
    }
    return Math.floor(leftLife);
  }
}
