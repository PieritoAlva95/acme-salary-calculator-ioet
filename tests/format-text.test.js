import { test, expect } from '@jest/globals';
import FormatText from '../src/utils/format-text.js';
import {
  DAILY_SCHEDULES,
  DAYS,
  FINAL_HOUR,
  START_HOUR,
} from '../src/constants/salary-constants.js';

const testDays = {
  testString: 'MO10:00-12:00,TH12:00-14:00,SU20:00-21:00',
  resultString: 'MO,TH,SU',
};

const testSchedules = {
  testString: 'MO10:00-12:00,TH12:00-14:00,SU20:00-21:00',
  resultString: '10:00-12:00,12:00-14:00,20:00-21:00',
};

const testStartHourAndMinute = {
  testString: '10:00-12:00,12:00-14:00,20:00-21:00',
  resultString: '10:00,12:00,20:00',
};

const testFinalHourAndMinute = {
  testString: '10:00-12:00,12:00-14:00,20:00-21:00',
  resultString: '12:00,14:00,21:00',
};

test("Get the days of a string as: 'MO10:00-12:00,TH12:00-14:00,SU20:00-21:00'", () => {
  const formatted = new FormatText(testDays.testString, DAILY_SCHEDULES);
  const expected = testDays.resultString;
  expect(formatted.DeletePattern()).toBe(expected);
});

test("Get the schedules of a string as: 'MO10:00-12:00,TH12:00-14:00,SU20:00-21:00'", () => {
  const formatted = new FormatText(testSchedules.testString, DAYS);
  const expected = testSchedules.resultString;
  expect(formatted.DeletePattern()).toBe(expected);
});

test("Get the start hour and start minute of a string as: 'MO10:00-12:00,TH12:00-14:00,SU20:00-21:00'", () => {
  const formatted = new FormatText(
    testStartHourAndMinute.testString,
    FINAL_HOUR
  );
  const expected = testStartHourAndMinute.resultString;
  expect(formatted.DeletePattern()).toBe(expected);
});

test("Get the final hour and final minute of a string as: 'MO10:00-12:00,TH12:00-14:00,SU20:00-21:00'", () => {
  const formatted = new FormatText(
    testFinalHourAndMinute.testString,
    START_HOUR
  );
  const expected = testFinalHourAndMinute.resultString;
  expect(formatted.DeletePattern()).toBe(expected);
});
