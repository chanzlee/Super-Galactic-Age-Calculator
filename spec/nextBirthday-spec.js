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

  it('should test whether getNextBirthday returns correct day left in mercury', function() {
    let testBirthday = new NextBirthday("1992-09-27");
    let testDayLeft = testBirthday.getNextBirthday("mercury");
    expect(testDayLeft).toEqual(85);
  });

  it('should test whether getNextBirthday returns correct day left in venus', function() {
    let testBirthday = new NextBirthday("1992-09-27");
    let testDayLeft = testBirthday.getNextBirthday("venus");
    expect(testDayLeft).toEqual(215);
  });

  it('should test whether getNextBirthday returns correct day left in earth', function() {
    let testBirthday = new NextBirthday("1992-09-27");
    let testDayLeft = testBirthday.getNextBirthday("earth");
    expect(testDayLeft).toEqual(349);
  });


  it('should test whether getNextBirthday returns correct day left in mars', function() {
    let testBirthday = new NextBirthday("1992-09-27");
    let testDayLeft = testBirthday.getNextBirthday("mars");
    expect(testDayLeft).toEqual(657);
  });

  it('should test whether getNextBirthday returns correct day left in jupiter', function() {
    let testBirthday = new NextBirthday("1992-09-27");
    let testDayLeft = testBirthday.getNextBirthday("jupiter");
    expect(testDayLeft).toEqual(4140);
  });


});
