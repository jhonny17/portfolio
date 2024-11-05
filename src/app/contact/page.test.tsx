import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import ContactPage from './page';

it('renders contact page', () => {
  render(<ContactPage />);
  expect(
    screen.getByRole('heading', { level: 1, name: 'Contact' }),
  ).toBeInTheDocument();
});
