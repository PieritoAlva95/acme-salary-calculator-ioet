import { describe, test, expect } from '@jest/globals';
import FormatTime from '../src/utils/format-time';

const testHours = {
  firstTest: '10:00,12:00,20:00',
  firstResult: [10, 12, 20],
  secondTest: '02:00,14:00,22:00,23:00',
  secondResult: [2, 14, 22, 23],
};

const testMinutes = {
  firstTest: '10:04,12:50,20:18',
  firstResult: [4, 50, 18],
  secondTest: '02:11,14:13,22:51,23:19',
  secondResult: [11, 13, 51, 19],
};

describe('Get the hours of a schedule string (HH:MM,HH:MM)', () => {
  test("Get the hours of '10:00,12:00,20:00'", () => {
    const formatted = new FormatTime(testHours.firstTest);
    expect(formatted.GetHour()).toEqual(testHours.firstResult);
  });

  test("Get the hours of '02:00,14:00,22:00,23:00'", () => {
    const formatted = new FormatTime(testHours.secondTest);
    expect(formatted.GetHour()).toEqual(testHours.secondResult);
  });
});

describe('Get the minutes of a schedule string (HH:MM,HH:MM)', () => {
  test("Get the minutes of '10:04,12:50,20:18'", () => {
    const formatted = new FormatTime(testMinutes.firstTest);
    expect(formatted.GetMinutes()).toEqual(testMinutes.firstResult);
  });

  test("Get the minutes of '02:11,14:13,22:51,23:19'", () => {
    const formatted = new FormatTime(testMinutes.secondTest);
    expect(formatted.GetMinutes()).toEqual(testMinutes.secondResult);
  });
});
