import { AgeCalculator } from '../src/AgeCalculator.js';

describe('AgeCalculator', function() {

  it('should test whether earthAgeCalculator returns correct earth Age', function() {
    let testBirthday = new AgeCalculator("1992-09-27");
    let testAge = testBirthday.earthAgeCalculator();
    expect(testAge).toEqual(26);
  });
});
