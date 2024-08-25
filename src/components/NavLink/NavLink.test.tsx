import { expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { NavLink } from './NavLink';

it('should render the nav link', () => {
  const children = 'Home';
  const route = '/home';

  render(<NavLink href={route}>{children}</NavLink>);

  const link = screen.getByRole('link');
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', route);

  expect(screen.getByText(children)).toBeInTheDocument();
});
