import { expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Footer } from './Footer';

it('should render the footer', () => {
  render(<Footer />);
  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
});

it('should render the footer text', () => {
  render(<Footer />);

  const date = new Date();
  const year = date.getFullYear();

  expect(
    screen.getByText(`Jhonny Vargas Arias © ${year}`),
  ).toBeInTheDocument();
  expect(screen.getByText('All rights reserved.')).toBeInTheDocument();
});
