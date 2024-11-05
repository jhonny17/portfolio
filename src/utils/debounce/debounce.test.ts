import { it, expect, vi } from 'vitest';

import { debounce } from './debounce';

it('should call the debounced function only after the delay', () => {
  vi.useFakeTimers();

  const mockFunction = vi.fn();
  const debouncedFunction = debounce(mockFunction, 200);

  debouncedFunction('first call');
  debouncedFunction('second call');
  debouncedFunction('third call');

  vi.advanceTimersByTime(100);
  expect(mockFunction).not.toHaveBeenCalled();

  vi.advanceTimersByTime(100);
  expect(mockFunction).toHaveBeenCalledTimes(1);
  expect(mockFunction).toHaveBeenCalledWith('third call');

  vi.useRealTimers();
});

it('should cancel the previous call if invoked again within the delay', () => {
  vi.useFakeTimers();

  const mockFunction = vi.fn();
  const debouncedFunction = debounce(mockFunction, 300);

  debouncedFunction('call 1');
  vi.advanceTimersByTime(100);
  debouncedFunction('call 2');
  vi.advanceTimersByTime(100);
  debouncedFunction('call 3');

  vi.advanceTimersByTime(299);
  expect(mockFunction).not.toHaveBeenCalled();

  vi.advanceTimersByTime(1);
  expect(mockFunction).toHaveBeenCalledTimes(1);
  expect(mockFunction).toHaveBeenCalledWith('call 3');

  vi.useRealTimers();
});
