import { AgeCalculator } from './../src/galacticAgeCalculator.js';

describe('AgeCalculator', function() {
  it('should get the year in days', function() {
    let letsGetYear = new AgeCalculator('1990-05-29')
    expect(letsGetYear.GetYear()).toEqual(726350);
  });
});
