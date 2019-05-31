import { AgeCalculator } from './../src/galacticAgeCalculator.js';

describe('AgeCalculator', function() {

  it('should return age in Earth days', function() {
    let letsGetAge = new AgeCalculator('1990-05-29')
    expect(letsGetAge.GetAge()).toEqual(10764);
  });

  // it('should return age in Mercury days', function() {
  //
  // }
});
