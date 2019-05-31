import { AgeCalculator } from './../src/galacticAgeCalculator.js';

describe('AgeCalculator', function() {
  it('should get the age in days', function() {
    let letsGetAge = new AgeCalculator('1990-05-29')
    expect(letsGetAge.GetAge()).toEqual(726529);
  });
});
