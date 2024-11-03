import { expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Profile } from './Profile';

it('renders the profile section', () => {
  render(<Profile />);

  const profileSection = screen.getByRole('heading', {
    level: 2,
    name: /Jhonny Vargas Arias/i,
  });

  expect(profileSection).toBeInTheDocument();

  const profileRole = screen.getByText(/Software Engineer/i);
  expect(profileRole).toBeInTheDocument();

  const profilePicture = screen.getByAltText(/Jhonny Vargas Arias/i);
  expect(profilePicture).toBeInTheDocument();
});

it('matches the snapshot', () => {
  const { asFragment } = render(<Profile />);
  expect(asFragment()).toMatchSnapshot();
});
