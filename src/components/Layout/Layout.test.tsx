import { expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Layout } from './Layout';

it('should render the layout', () => {
  render(<Layout />);
  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.getByRole('main')).toBeInTheDocument();
  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
});

it('should render the children', () => {
  const children = 'Children';

  render(<Layout>{children}</Layout>);

  expect(screen.getByText(children)).toBeInTheDocument();
});
