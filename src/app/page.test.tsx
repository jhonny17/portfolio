import { beforeEach, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import Home from './page';

beforeEach(() => {
  vi.clearAllMocks();
});

it('renders the profile', () => {
  render(<Home />);
  expect(
    screen.getByRole('heading', { name: /Jhonny Vargas Arias/i, level: 1 }),
  ).toBeInTheDocument();
});
