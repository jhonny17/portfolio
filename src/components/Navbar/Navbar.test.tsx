import { expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Navbar } from './Navbar';

it('should render the navbar', () => {
  render(<Navbar />);
  expect(screen.getByRole('navigation')).toBeInTheDocument();
});

it('should render the logo', () => {
  render(<Navbar />);

  const logo = screen.getByRole('link', { name: /JVA/i });
  expect(logo).toBeInTheDocument();
  expect(logo).toHaveAttribute('href', '/');
});

it('should render the items', () => {
  render(<Navbar />);

  const home = screen.getByRole('link', { name: /home/i });
  expect(home).toBeInTheDocument();
  expect(home).toHaveAttribute('href', '/');
});
