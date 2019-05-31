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

  GetVenusAge()
  {
    let earthAge = parseFloat(this.GetAge());
    let venusAge = (earthAge/ 225);
    return parseFloat(venusAge.toFixed(2));
  }

  GetMarsAge()
  {
    let earthAge = parseFloat(this.GetAge());
    let marsAge = (earthAge/ 687);
    return parseFloat(marsAge.toFixed(2));
  }

  GetJupiterAge()
  {
    let earthAge = parseFloat(this.GetAge());
    let jupiterAge = (earthAge / (11.8 * 365));
    return parseFloat(jupiterAge.toFixed(1));
  }
}
