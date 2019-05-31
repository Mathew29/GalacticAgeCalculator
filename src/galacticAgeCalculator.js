export class AgeCalculator {
  constructor(date) {
    this.date = new Date(date);
    this.currentYear = new Date().getUTCFullYear();
  }

  GetAge()
  {
    let year = this.date.getUTCFullYear();
    //find how many years you have been alive
    let yearsAlive = this.currentYear - year;
    let daysInYear = yearsAlive * 365;
    let month = this.date.getUTCMonth();
    //Add 1 to month because Date Method months are 0-11
    let daysInMonth = (month + 1) * 30;
    let day = this.date.getUTCDate();
    let ageInDays = daysInYear + daysInMonth + day;
    return ageInDays;
  }

  GetMercuryAge()
  {
    let earthAge = parseFloat(this.GetAge());
    let mercuryAge = (earthAge/ 88);
    return parseFloat(mercuryAge.toFixed(2));
  }

  GetMercuryAgeExpectancy()
  {
    let age = this.GetMercuryAge();
    const lifeExpect = 65;
    if(lifeExpect > age)
    {
      let yearsLeft = lifeExpect - age;
      return parseFloat(yearsLeft.toFixed(1));
    }
    if(lifeExpect < age)
    {
      let stillKicking = age - lifeExpect;
      return parseFloat(stillKicking.toFixed(2));
    }
  }
  SetMercuryBirthday()
  {
    let year = this.date.getUTCFullYear();
    console.log(year);
    let month = this.date.getUTCMonth();
    let day = this.date.getUTCDate();
    console.log(day);
    let birthday = new Date((year + 1), month, day);
    return birthday.toISOString().slice(0, 10);
  }

  GetVenusAge()
  {
    let earthAge = parseFloat(this.GetAge());
    let venusAge = (earthAge/ 225);
    return parseFloat(venusAge.toFixed(2));
  }

  GetVenusAgeExpectancy()
  {
    let age = this.GetVenusAge();
    const lifeExpect = 65;
    if(lifeExpect > age)
    {
      let yearsLeft = lifeExpect - age;
      return parseFloat(yearsLeft.toFixed(2));
    }
    if(lifeExpect < age)
    {
      let stillKicking = age - lifeExpect;
      return parseFloat(stillKicking.toFixed(1));
    }
  }

  GetMarsAge()
  {
    let earthAge = parseFloat(this.GetAge());
    let marsAge = (earthAge/ 687);
    return parseFloat(marsAge.toFixed(2));
  }
  GetMarsAgeExpectancy()
  {
    let age = this.GetMarsAge();
    const lifeExpect = 65;
    if(lifeExpect > age)
    {
      let yearsLeft = lifeExpect - age;
      return parseFloat(yearsLeft.toFixed(2));
    }
    if(lifeExpect < age)
    {
      let stillKicking = age - lifeExpect;
      return parseFloat(stillKicking.toFixed(2));
    }
  }

  GetJupiterAge()
  {
    let earthAge = parseFloat(this.GetAge());
    let jupiterAge = (earthAge / (11.8 * 365));
    return parseFloat(jupiterAge.toFixed(1));
  }

  GetJupiterAgeExpectancy()
  {
    let age = this.GetJupiterAge();
    const lifeExpect = 65;
    if(lifeExpect > age)
    {
      let yearsLeft = lifeExpect - age;
      return parseFloat(yearsLeft.toFixed(1));
    }
    if(lifeExpect < age)
    {
      let stillKicking = age - lifeExpect;
      return parseFloat(stillKicking.toFixed(1));
    }
  }



}
