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

  it('should test whether venusAgeCalculator returns correct venus Age', function() {
    let testBirthday = new AgeCalculator("1992-09-27");
    let testAge = testBirthday.venusAgeCalculator();
    expect(testAge).toEqual(42);
  });

  it('should test whether marsAgeCalculator returns correct mars Age', function() {
    let testBirthday = new AgeCalculator("1992-09-27");
    let testAge = testBirthday.marsAgeCalculator();
    expect(testAge).toEqual(13);
  });

  it('should test whether jupiterAgeCalculator returns correct jupiter Age', function() {
    let testBirthday = new AgeCalculator("1992-09-27");
    let testAge = testBirthday.jupiterAgeCalculator();
    expect(testAge).toEqual(2);
  });
});
