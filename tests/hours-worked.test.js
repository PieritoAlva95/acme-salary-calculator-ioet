import { describe, test, expect } from '@jest/globals';
import SalaryCalculator from '../src/scripts/salary-calculator.js';

const testHoursWorked = {
  firstCase: {
    finalHours: [12, 12, 3, 18, 21],
    startHours: [10, 10, 1, 14, 20],
    finalMinutes: [24, 0, 0, 0, 0],
    startMinutes: [25, 0, 0, 0, 0],
    expected: [1, 2, 2, 4, 1],
  },
  secondCase: {
    finalHours: [12, 12, 3, 18, 21],
    startHours: [10, 10, 1, 14, 20],
    finalMinutes: [0, 0, 0, 0, 0],
    startMinutes: [0, 0, 0, 0, 0],
    expected: [2, 2, 2, 4, 1],
  },
  thirdCase: {
    finalHours: [0, 12, 3, 18, 21],
    startHours: [21, 10, 1, 14, 20],
    finalMinutes: [0, 0, 0, 0, 0],
    startMinutes: [15, 0, 0, 0, 0],
    expected: [2, 2, 2, 4, 1],
  },
  fourthCase: {
    finalHours: [0, 12, 3, 18, 21],
    startHours: [21, 10, 1, 14, 20],
    finalMinutes: [25, 0, 0, 0, 0],
    startMinutes: [25, 0, 0, 0, 0],
    expected: [3, 2, 2, 4, 1],
  },
};

describe('Tests to obtain the number of hours worked according to various cases.', () => {
  test('Case 1: Number of hours worked when the final minutes are not equal to the start minutes so 1 will be subtracted from the number of hours.', () => {
    const salaryCalculator = new SalaryCalculator(
      testHoursWorked.firstCase.finalHours,
      testHoursWorked.firstCase.startHours,
      testHoursWorked.firstCase.finalMinutes,
      testHoursWorked.firstCase.startMinutes
    );
    const expected = testHoursWorked.firstCase.expected;
    expect(salaryCalculator.HoursWorked()).toEqual(expected);
  });

  test('Case 2: Number of hours worked when the final minutes are equal to the start minutes.', () => {
    const salaryCalculator = new SalaryCalculator(
      testHoursWorked.secondCase.finalHours,
      testHoursWorked.secondCase.startHours,
      testHoursWorked.secondCase.finalMinutes,
      testHoursWorked.secondCase.startMinutes
    );
    const expected = testHoursWorked.secondCase.expected;
    expect(salaryCalculator.HoursWorked()).toEqual(expected);
  });

  test('Case 3: Midnight case is treated as 24:00 to obtain the numbers of hours worked and the final minutes are not equal to the start minutes.', () => {
    const salaryCalculator = new SalaryCalculator(
      testHoursWorked.thirdCase.finalHours,
      testHoursWorked.thirdCase.startHours,
      testHoursWorked.thirdCase.finalMinutes,
      testHoursWorked.thirdCase.startMinutes
    );
    const expected = testHoursWorked.thirdCase.expected;
    expect(salaryCalculator.HoursWorked()).toEqual(expected);
  });

  test('Case 4: Midnight case is treated as 24:00 to obtain the numbers of hours worked and the final minutes are equal to the start minutes.', () => {
    const salaryCalculator = new SalaryCalculator(
      testHoursWorked.fourthCase.finalHours,
      testHoursWorked.fourthCase.startHours,
      testHoursWorked.fourthCase.finalMinutes,
      testHoursWorked.fourthCase.startMinutes
    );
    const expected = testHoursWorked.fourthCase.expected;
    expect(salaryCalculator.HoursWorked()).toEqual(expected);
  });
});
