import { WORK_DAYS, WEEKEND } from '../constants/salary-constants.js';

export default class SalaryCalculator {
  constructor(
    finalHour = [],
    startHour = [],
    finalMinute = [],
    startMinute = [],
    days = []
  ) {
    this.finalHour = finalHour;
    this.startHour = startHour;
    this.finalMinute = finalMinute;
    this.startMinute = startMinute;
    this.days = days;
  }

  //Number of hours that an employee works
  HoursWorked() {
    let hours = [];
    if (this.finalHour.length == this.startHour.length) {
      for (let i = 0; i < this.finalHour.length; i++) {
        if (this.finalMinute[i] == this.startMinute[i]) {
          if (this.finalHour[i] == 0) {
            this.finalHour[i] = 24; //Change to 24 to do substraction properly
            hours.push(this.finalHour[i] - this.startHour[i]);
            this.finalHour[i] = 0; //Change back to zero to achieve the conditions of salary range
          } else if (this.finalHour[i] != 0) {
            hours.push(this.finalHour[i] - this.startHour[i]);
          }
        } else if (this.finalMinute[i] != this.startMinute[i]) {
          if (this.finalHour[i] == 0) {
            this.finalHour[i] = 24;
            hours.push(this.finalHour[i] - this.startHour[i] - 1);
            this.finalHour[i] = 0;
          } else if (this.finalHour[i] != 0) {
            hours.push(this.finalHour[i] - this.startHour[i] - 1);
          }
        }
      }
    }
    return hours;
  }

  //Salary range employee will be paid based on day and range of hour
  SalaryRange() {
    let salaryRangeArray = [];
    let salaryPerHour = 0;

    for (let i = 0; i < this.days.length; i++) {
      const workWeek = WORK_DAYS.includes(this.days[i]);
      const weekEnd = WEEKEND.includes(this.days[i]);

      const firstRange =
        ((this.startHour[i] == 0 &&
          this.startMinute[i] >= 1 &&
          this.startMinute[i] <= 59) ||
          (this.startHour[i] >= 1 &&
            this.startHour[i] <= 7 &&
            this.startMinute[i] >= 0 &&
            this.startMinute[i] <= 59) ||
          (this.startHour[i] == 8 && this.startMinute[i] == 0)) &&
        ((this.finalHour[i] >= 1 &&
          this.finalHour[i] <= 8 &&
          this.finalMinute[i] >= 0 &&
          this.finalMinute[i] <= 59) ||
          (this.finalHour[i] == 9 && this.finalMinute[i] == 0));
      const secondRange =
        ((this.startHour[i] == 9 &&
          this.startMinute[i] >= 1 &&
          this.startMinute[i] <= 59) ||
          (this.startHour[i] >= 10 &&
            this.startHour[i] <= 16 &&
            this.startMinute[i] >= 0 &&
            this.startMinute[i] <= 59) ||
          (this.startHour[i] == 17 && this.startMinute[i] == 0)) &&
        ((this.finalHour[i] >= 10 &&
          this.finalHour[i] <= 17 &&
          this.finalMinute[i] >= 0 &&
          this.finalMinute[i] <= 59) ||
          (this.finalHour[i] == 18 && this.finalMinute[i] == 0));
      const thirdRange =
        ((this.startHour[i] == 18 &&
          this.startMinute[i] >= 1 &&
          this.startMinute[i] <= 59) ||
          (this.startHour[i] >= 19 &&
            this.startHour[i] <= 22 &&
            this.startMinute[i] >= 0 &&
            this.startMinute[i] <= 59) ||
          (this.startHour[i] == 23 && this.startMinute[i] == 0)) &&
        ((this.finalHour[i] >= 19 &&
          this.finalHour[i] <= 23 &&
          this.finalMinute[i] >= 0 &&
          this.finalMinute[i] <= 59) ||
          (this.finalHour[i] == 0 && this.finalMinute[i] == 0));

      if (workWeek) {
        if (firstRange) {
          salaryRangeArray.push((salaryPerHour = 25));
        } else if (secondRange) {
          salaryRangeArray.push((salaryPerHour = 15));
        } else if (thirdRange) {
          salaryRangeArray.push((salaryPerHour = 20));
        }
      } else if (weekEnd) {
        if (firstRange) {
          salaryRangeArray.push((salaryPerHour = 30));
        } else if (secondRange) {
          salaryRangeArray.push((salaryPerHour = 20));
        } else if (thirdRange) {
          salaryRangeArray.push((salaryPerHour = 25));
        }
      } else {
        salaryRangeArray.push((salaryPerHour = NaN));
      }
    }
    return salaryRangeArray;
  }

  //The salary employee will be paid bases on the numbers of hours and salary range
  GetSalary(hourDifference = [], salaryRange = []) {
    let sum = 0;

    for (var i = 0; i < hourDifference.length; i++) {
      sum += hourDifference[i] * salaryRange[i];
    }
    return sum;
  }
}
