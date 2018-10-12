import { lifeExpectancy } from '../src/lifeExpectancy.js';


describe('lifeExpectancy', function() {

  it('should test whether earthLifeExpectancy returns correct life Expectancy', function() {
    let testBirthday= new lifeExpectancy("1992-09-27");
    let testExpectancy = testBirthday.earthLifeExpectancy(1,0,1,0,0,0);
    expect(testExpectancy).toEqual(74);
  });

  it('should test whether getLeftLife returns correct earth life Expectancy', function() {
    let testBirthday= new lifeExpectancy("1992-09-27");
    let testExpectancy = testBirthday.getLeftLife("earth",1,0,1,0,0);
    expect(testExpectancy).toEqual(48);
  });

  it('should test whether getLeftLife returns correct mercury life Expectancy', function() {
    let testBirthday= new lifeExpectancy("1992-09-27");
    let testExpectancy = testBirthday.getLeftLife("mercury",1,0,1,0,0);
    expect(testExpectancy).toEqual(200);
  });

  it('should test whether getLeftLife returns correct venus life Expectancy', function() {
    let testBirthday= new lifeExpectancy("1992-09-27");
    let testExpectancy = testBirthday.getLeftLife("venus",1,0,1,0,0);
    expect(testExpectancy).toEqual(78);
  });

  it('should test whether getLeftLife returns correct mars life Expectancy', function() {
    let testBirthday= new lifeExpectancy("1992-09-27");
    let testExpectancy = testBirthday.getLeftLife("mars",1,0,1,0,0);
    expect(testExpectancy).toEqual(26);
  });

  it('should test whether getLeftLife returns correct mars jupiter life Expectancy', function() {
    let testBirthday= new lifeExpectancy("1992-09-27");
    let testExpectancy = testBirthday.getLeftLife("jupiter",1,0,1,0,0);
    expect(testExpectancy).toEqual(4);
  });

});
