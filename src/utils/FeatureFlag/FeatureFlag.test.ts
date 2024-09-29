import { vi, beforeEach, it, expect } from 'vitest';
import * as growthbook from '@growthbook/growthbook';

import { getFeatureFlag } from './FeatureFlag';

vi.mock('@growthbook/growthbook', () => {
  const actual = vi.importActual('@growthbook/growthbook');
  return {
    ...actual,
    GrowthBook: vi.fn(),
  };
});

const mockedInit = vi.fn();
const mockedDestroy = vi.fn();
const mockedGetFeatureValue = vi.fn();

beforeEach(() => {
  vi.clearAllMocks();
  vi.spyOn(growthbook, 'GrowthBook').mockImplementation(() => {
    return {
      init: mockedInit,
      getFeatureValue: mockedGetFeatureValue,
      destroy: mockedDestroy,
    } as unknown as growthbook.GrowthBook;
  });
});

it('initialize GrowthBook with correct parameters', async () => {
  await getFeatureFlag('key', 'default');
  expect(mockedInit).toHaveBeenCalledTimes(1);
});

it('get feature flag value', async () => {
  const key = 'key';
  const value = 'value';
  mockedGetFeatureValue.mockReturnValue(value);
  const result = await getFeatureFlag(key);
  expect(result).toBe(value);
});

it('destroy GrowthBook client after getting feature flag value', async () => {
  await getFeatureFlag('key');
  expect(mockedDestroy).toHaveBeenCalledTimes(1);
});

it('returns the default value if feature flag is not found', async () => {
  const defaultValue = 'default';
  mockedGetFeatureValue.mockReturnValue(undefined);
  const result = await getFeatureFlag('key', defaultValue);
  expect(result).toBe(defaultValue);
});
