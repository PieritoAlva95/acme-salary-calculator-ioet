import FormatText from '../utils/format-text.js';
import FormatTime from '../utils/format-time.js';
import SalaryCalculator from '../scripts/salary-calculator.js';
import {
  DAILY_SCHEDULES,
  DAYS,
  FINAL_HOUR,
  START_HOUR,
} from '../constants/salary-constants.js';

const fileUpload = document.getElementById('file-upload');
const textArea = document.getElementById('text-area');
let salaryResult = [];

fileUpload.addEventListener(
  'change',
  (e) => {
    if (fileUpload.type && !fileUpload.value.endsWith('.txt')) {
      alert('File is not a text.');
      return;
    }
    let reader = new FileReader();
    reader.onload = function () {
      let employeeData = reader.result.trim().split(/\n/);
      for (let i = 0; i < employeeData.length; i++) {
        let employeeDataToString = employeeData[i].toString();
        let getEmployeesAndSchedules = employeeDataToString.split('=');
        let employees = getEmployeesAndSchedules[0];
        let schedules = getEmployeesAndSchedules[1];

        let days = new FormatText(schedules, DAILY_SCHEDULES)
          .DeletePattern()
          .trim()
          .split(',');

        let dailySchedules = new FormatText(schedules, DAYS).DeletePattern();

        //Split startHourAndMinute with format HH:MM
        let startHourAndMinute = new FormatText(
          dailySchedules,
          FINAL_HOUR
        ).DeletePattern();

        //Split finalHourAndMinute with format HH:MM
        let finalHourAndMinute = new FormatText(
          dailySchedules,
          START_HOUR
        ).DeletePattern();

        //Get hour and minute for initial and final Hours
        let startHour = new FormatTime(startHourAndMinute).GetHour();
        let startMinute = new FormatTime(startHourAndMinute).GetMinutes();
        let finalHour = new FormatTime(finalHourAndMinute).GetHour();
        let finalMinute = new FormatTime(finalHourAndMinute).GetMinutes();

        let salaryCalculator = new SalaryCalculator(
          finalHour,
          startHour,
          finalMinute,
          startMinute,
          days
        );
        let hourDifference = salaryCalculator.HoursWorked();
        let salaryRange = salaryCalculator.SalaryRange();
        let salary = salaryCalculator.GetSalary(hourDifference, salaryRange);

        salaryResult.push(`The amount to pay ${employees} is ${salary} USD\n`);
      }
      textArea.value = salaryResult.toString().replace(/,/g, '');
    };

    reader.onerror = (e) => alert(e.target.error.name);
    reader.readAsText(fileUpload.files[0]);
  },
  false
);
