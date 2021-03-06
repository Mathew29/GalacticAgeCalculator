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

describe('AgeCalculator', function() {
  it('should return age in Jupiter years', function() {
    let letsGetAge = new AgeCalculator('1990-05-29');
    expect(letsGetAge.GetJupiterAge()).toEqual(2.5);
  })
});

describe('AgeCalculator', function() {
  it('should return years until life expectancy on Mercury has been reached', function() {
    let letsGetAge = new AgeCalculator('2010-3-15');
    expect(letsGetAge.GetMercuryAgeExpectancy()).toEqual(26.5);
  })
});

describe('AgeCalculator', function() {
  it('should return years lived past life expectancy on Mercury', function() {
    let letsGetAge = new AgeCalculator('1995-3-15');
    expect(letsGetAge.GetMercuryAgeExpectancy()).toEqual(35.74);
  })
});

describe('AgeCalculator', function() {
  it('should return years until life expectancy on Venus has been reached', function() {
    let letsGetAge = new AgeCalculator('1990-05-29');
    expect(letsGetAge.GetVenusAgeExpectancy()).toEqual(17.16);
  })
});

describe('AgeCalculator', function() {
  it('should return years lived past life expectancy on Venus', function() {
    let letsGetAge = new AgeCalculator('1920-05-29');
    expect(letsGetAge.GetVenusAgeExpectancy()).toEqual(96.4);
  })
});

describe('AgeCalculator', function() {
  it('should return years until life expectancy on Mars has been reached', function() {
    let letsGetAge = new AgeCalculator('1990-05-29');
    expect(letsGetAge.GetMarsAgeExpectancy()).toEqual(49.33);
  })
});

describe('AgeCalculator', function() {
  it('should return years lived past life expectancy on Mars', function() {
    let letsGetAge = new AgeCalculator('1880-05-29');
    expect(letsGetAge.GetMarsAgeExpectancy()).toEqual(9.11);
  })
});

describe('AgeCalculator', function() {
  it('should return years until life expectancy on Jupiter has been reached', function() {
    let letsGetAge = new AgeCalculator('1990-05-29');
    expect(letsGetAge.GetJupiterAgeExpectancy()).toEqual(62.5);
  })
});

describe('AgeCalculator', function() {
  it('should return years lived past life expectancy on Jupiter', function() {
    let letsGetAge = new AgeCalculator('1000-05-29');
    expect(letsGetAge.GetJupiterAgeExpectancy()).toEqual(21.4);
  })
});

describe('AgeCalculator', function() {
  it('should return next Birthday', function() {
    let letsGetAge = new AgeCalculator('1990-05-29');
    expect(letsGetAge.SetBirthday()).toEqual('1991-05-29');
  })
});

//10764
//8865 Mercury
//21640
