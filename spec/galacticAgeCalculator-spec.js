import { AgeCalculator } from './../src/galacticAgeCalculator.js';

describe('AgeCalculator', function() {

  it('should return age in Earth days', function() {
    let letsGetAge = new AgeCalculator('1990-05-29');
    expect(letsGetAge.GetAge()).toEqual(10764);
  });
});

describe('AgeCalculator', function() {
  it('should return age in Mercury years', function() {
    let letsGetAge = new AgeCalculator('1995-3-15');
    expect(letsGetAge.GetMercuryAge()).toEqual(100.74);
  });
});

describe('AgeCalculator', function() {
  it('should return age in Venus years', function() {
    let letsGetAge = new AgeCalculator('1990-05-29');
    expect(letsGetAge.GetVenusAge()).toEqual(47.84);
  })
});

describe('AgeCalculator', function() {
  it('should return age in Mars years', function() {
    let letsGetAge = new AgeCalculator('1990-05-29');
    expect(letsGetAge.GetMarsAge()).toEqual(15.67);
  })
});

//10764
