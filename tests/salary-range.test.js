import { describe, test, expect } from '@jest/globals';
import SalaryCalculator from '../src/scripts/salary-calculator.js';

const testSalaryRange = {
  firstCase: {
    finalHours: [9, 9, 9, 9, 9],
    startHours: [5, 5, 5, 5, 5],
    finalMinutes: [0, 10, 10, 10, 10],
    startMinutes: [0, 0, 0, 0, 0],
    days: ['MO', 'MO', 'SU', 'SU', 'SU'],
    expected: [25],
  },
  secondCase: {
    finalHours: [9, 12, 18, 17, 23],
    startHours: [5, 10, 14, 10, 22],
    finalMinutes: [1, 0, 0, 0, 0],
    startMinutes: [0, 0, 0, 0, 0],
    days: ['MO', 'TU', 'SA', 'TH', 'SU'],
    expected: [15, 20, 15, 25],
  },
  thirdCase: {
    finalHours: [7, 12, 18, 17, 23],
    startHours: [5, 10, 14, 10, 22],
    finalMinutes: [0, 0, 0, 0, 0],
    startMinutes: [0, 0, 0, 0, 0],
    days: ['MO', 'TU', 'SA', 'TH', 'SU'],
    expected: [25, 15, 20, 15, 25],
  },
  fourthCase: {
    finalHours: [9, 18, 17, 17, 18, 21],
    startHours: [8, 17, 10, 10, 14, 20],
    finalMinutes: [0, 0, 0, 0, 0, 0],
    startMinutes: [0, 0, 0, 0, 0, 0],
    days: ['MO', 'MO', 'TU', 'TH', 'SA', 'SU'],
    expected: [25, 15, 15, 15, 20, 25],
  },
  fifthCase: {
    finalHours: [0, 12, 3, 18],
    startHours: [21, 10, 1, 14],
    finalMinutes: [0, 0, 0, 0],
    startMinutes: [0, 0, 0, 0],
    days: ['MO', 'TU', 'SA', 'SU'],
    expected: [20, 15, 30, 20],
  },
};

describe('Tests to obtain the pay range according to various cases.', () => {
  test('Case 1: Only one element achieve the conditions.', () => {
    const salaryRange = new SalaryCalculator(
      testSalaryRange.firstCase.finalHours,
      testSalaryRange.firstCase.startHours,
      testSalaryRange.firstCase.finalMinutes,
      testSalaryRange.firstCase.startMinutes,
      testSalaryRange.firstCase.days
    );
    const expected = testSalaryRange.firstCase.expected;
    expect(salaryRange.SalaryRange()).toEqual(expected);
  });

  test("Case 2: The first element doesn't match, but the other elements do.", () => {
    const salaryRange = new SalaryCalculator(
      testSalaryRange.secondCase.finalHours,
      testSalaryRange.secondCase.startHours,
      testSalaryRange.secondCase.finalMinutes,
      testSalaryRange.secondCase.startMinutes,
      testSalaryRange.secondCase.days
    );
    const expected = testSalaryRange.secondCase.expected;
    expect(salaryRange.SalaryRange()).toEqual(expected);
  });

  test('Case 3: Normal case. [05:00-07:00,10:00-12:00,14:00-18:00,10:00-17:00,22:00-00:00]', () => {
    const salaryRange = new SalaryCalculator(
      testSalaryRange.thirdCase.finalHours,
      testSalaryRange.thirdCase.startHours,
      testSalaryRange.thirdCase.finalMinutes,
      testSalaryRange.thirdCase.startMinutes,
      testSalaryRange.thirdCase.days
    );
    const expected = testSalaryRange.thirdCase.expected;
    expect(salaryRange.SalaryRange()).toEqual(expected);
  });

  test('Case 4: When a day is repeated but with a different range of hours. [08:00-09:00,17:00-18:00,10:00-17:00,10:00-17:00,14:00-18:00,20:00-21:00]', () => {
    const salaryRange = new SalaryCalculator(
      testSalaryRange.fourthCase.finalHours,
      testSalaryRange.fourthCase.startHours,
      testSalaryRange.fourthCase.finalMinutes,
      testSalaryRange.fourthCase.startMinutes,
      testSalaryRange.fourthCase.days
    );
    const expected = testSalaryRange.fourthCase.expected;
    expect(salaryRange.SalaryRange()).toEqual(expected);
  });

  test('Case 5: Taking into account the time 00:00 or 24:00. [21:00-00:00,10:00-12:00,01:00-03:00,14:00-18:00]', () => {
    const salaryRange = new SalaryCalculator(
      testSalaryRange.fifthCase.finalHours,
      testSalaryRange.fifthCase.startHours,
      testSalaryRange.fifthCase.finalMinutes,
      testSalaryRange.fifthCase.startMinutes,
      testSalaryRange.fifthCase.days
    );
    const expected = testSalaryRange.fifthCase.expected;
    expect(salaryRange.SalaryRange()).toEqual(expected);
  });
});
