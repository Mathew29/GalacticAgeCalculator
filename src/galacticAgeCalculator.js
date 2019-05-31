export class AgeCalculator {
  constructor(date) {
    this.date = new Date(date);
  }

  GetYear()
  {
    let year = this.date.getUTCFullYear();
    let dayInYears = year * 365;
    return dayInYears;
  }
}
