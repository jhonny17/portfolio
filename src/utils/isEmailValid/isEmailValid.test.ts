import { expect, it } from 'vitest';

import { isEmailValid } from './isEmailValid';

it('returns true for valid emails', () => {
  expect(isEmailValid('test@example.com')).toBe(true);
  expect(isEmailValid('user+tag@example.com')).toBe(true);
  expect(isEmailValid('user.name+filter@sub.domain.com')).toBe(true);
  expect(isEmailValid('name.surname+12345@example.co.uk')).toBe(true);
});

it('returns false for invalid emails', () => {
  expect(isEmailValid('plainaddress')).toBe(false);
  expect(isEmailValid('missingdomain@.com')).toBe(false);
  expect(isEmailValid('@missingusername.com')).toBe(false);
  expect(isEmailValid('username@.com.')).toBe(false);
  expect(isEmailValid('username@domain..com')).toBe(false);
  expect(isEmailValid('user name@example.com')).toBe(false);
  expect(isEmailValid('user@domain@domain.com')).toBe(false);
});
