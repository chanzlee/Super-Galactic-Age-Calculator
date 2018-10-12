import * as constants from './constants.js';


export class AgeCalculator {
  constructor(birthDay) {
    this.birthDay = birthDay;
  }
  earthAgeCalculator(){
    let birthDay = new Date(this.birthDay);
    let lifeSpan = (Date.now() - birthDay.getTime()) / 1000;
    let earthAge = Math.floor(lifeSpan / constants.secondsInYear);
    return earthAge;
  }

  mercuryAgeCalculator() {
  let mercuryAge = Math.floor(this.earthAgeCalculator()/constants.mercuryToEarth);
  return mercuryAge;
  }
}
