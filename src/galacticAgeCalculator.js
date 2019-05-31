export class AgeCalculator {
  constructor(date, year, month, day) {
    this.date = new Date(date);
  }

  GetAge()
  {
    let year = this.date.getUTCFullYear();
    let daysInYear = year * 365;
    let month = this.date.getUTCMonth();
    //Add 1 to month because Date Method months are 0-11
    let daysInMonth = (month + 1) * 30;
    let day = this.date.getUTCDate();
    let ageInDays = daysInYear + daysInMonth + day;
    return ageInDays;
  }
}
