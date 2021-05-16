import { describe, test, expect } from '@jest/globals';
import SalaryCalculator from '../src/scripts/salary-calculator.js';

const testTotalSalary = {
  firstCase: {
    finalHours: [8, 21, 13],
    startHours: [5, 19, 11],
    finalMinutes: [0, 0, 0],
    startMinutes: [0, 0, 0],
    days: ['MO', 'WE', 'FR'],
    hoursWorked: [3, 2, 2],
    salaryRange: [25, 20, 15],
    expected: 145,
  },

  secondCase: {
    finalHours: [18, 12, 18, 15, 12, 21],
    startHours: [16, 10, 16, 13, 10, 22],
    finalMinutes: [0, 0, 0, 0, 0, 0],
    startMinutes: [0, 0, 0, 0, 0, 0],
    days: ['MO', 'TU', 'TU', 'TH', 'SA', 'SU'],
    hoursWorked: [2, 2, 2, 2, 2, 1],
    salaryRange: [15, 15, 15, 15, 20, 25],
    expected: 185,
  },
};

describe('Tests to obtain the total salary according to various cases.', () => {
  test('Case 1: Normal Case. [05:00-08:00,19:00-21:00,11:00-13:00]', () => {
    const totalSalary = new SalaryCalculator(
      testTotalSalary.firstCase.finalHours,
      testTotalSalary.firstCase.startHours,
      testTotalSalary.firstCase.finalMinutes,
      testTotalSalary.firstCase.finalMinutes,
      testTotalSalary.firstCase.days
    );
    const expected = testTotalSalary.firstCase.expected;
    expect(
      totalSalary.GetSalary(
        testTotalSalary.firstCase.hoursWorked,
        testTotalSalary.firstCase.salaryRange
      )
    ).toEqual(expected);
  });

  test('Case 2: when the same day is repeated with a different range of hours. [16:00-18:00,10:00-12:00,16:00-18:00,13:00-15:00,10:00-12:00,21:00-22:00]', () => {
    const totalSalary = new SalaryCalculator(
      testTotalSalary.secondCase.finalHours,
      testTotalSalary.secondCase.startHours,
      testTotalSalary.secondCase.finalMinutes,
      testTotalSalary.secondCase.finalMinutes,
      testTotalSalary.secondCase.days
    );
    const expected = testTotalSalary.secondCase.expected;
    expect(
      totalSalary.GetSalary(
        testTotalSalary.secondCase.hoursWorked,
        testTotalSalary.secondCase.salaryRange
      )
    ).toEqual(expected);
  });
});
