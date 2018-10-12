import { AgeCalculator } from '../src/AgeCalculator.js';

describe('AgeCalculator', function() {

  it('should test whether earthAgeCalculator returns correct earth Age', function() {
    let testBirthday = new AgeCalculator("1992-09-27");
    let testAge = testBirthday.earthAgeCalculator();
    expect(testAge).toEqual(26);
  });

  it('should test whether mercuryAgeCalculator returns correct mercury Age', function() {
    let testBirthday = new AgeCalculator("1992-09-27");
    let testAge = testBirthday.mercuryAgeCalculator();
    expect(testAge).toEqual(107);
  });
});
