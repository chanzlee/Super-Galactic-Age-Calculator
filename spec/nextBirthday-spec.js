import { NextBirthday } from '../src/nextBirthday.js';

describe('NextBirthday', function() {

  it('should test whether earthDayUntilBirthday returns correct day left when didnt past in this year', function() {
    let testBirthday = new NextBirthday("2018-10-14");
    let testDayLeft = testBirthday.earthDayUntilBirthday();
    expect(testDayLeft).toEqual(1);
  });

  it('should test whether earthDayUntilBirthday returns correct day when past in this year', function() {
    let testBirthday = new NextBirthday("1992-09-27");
    let testDayLeft = testBirthday.earthDayUntilBirthday();
    expect(testDayLeft).toEqual(349);
  });

});
