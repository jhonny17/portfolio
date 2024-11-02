import { expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Social } from './Social';
import { getSocials } from '@/data/socials';

type SocialsMap = {
  [key: string]: ReturnType<typeof getSocials>[number];
};

const socials: SocialsMap = getSocials().reduce((acc, social) => {
  acc[social.icon] = social;
  return acc;
}, {} as SocialsMap);

it('matches the snapshot', () => {
  const { asFragment } = render(<Social />);
  expect(asFragment()).toMatchSnapshot();
});

it('renders the social section', () => {
  render(<Social />);
  expect(
    screen.getByRole('heading', { level: 2, name: 'Socials' }),
  ).toBeInTheDocument();
});

it('renders the github icon', () => {
  render(<Social />);
  const social = socials['github'];
  expect(social).toBeDefined();

  const link = screen.getByRole('link', {
    name: social.name,
  }) as HTMLAnchorElement;

  expect(link).toBeInTheDocument();
  expect(link.href).toBe(social.url);
  expect(link.target).toBe('_blank');
  expect(link.rel).toBe('noopener noreferrer');
  expect(link.querySelector('svg')).toMatchSnapshot();
});

it('renders the discord icon', () => {
  render(<Social />);
  const social = socials['discord'];
  expect(social).toBeDefined();

  const link = screen.getByRole('link', {
    name: social.name,
  }) as HTMLAnchorElement;

  expect(link).toBeInTheDocument();
  expect(link.href).toBe(social.url);
  expect(link.target).toBe('_blank');
  expect(link.rel).toBe('noopener noreferrer');
  expect(link.querySelector('svg')).toMatchSnapshot();
});

it('renders the linkedin icon', () => {
  render(<Social />);
  const social = socials['linkedin'];
  expect(social).toBeDefined();

  const link = screen.getByRole('link', {
    name: social.name,
  }) as HTMLAnchorElement;

  expect(link).toBeInTheDocument();
  expect(link.href).toBe(social.url);
  expect(link.target).toBe('_blank');
  expect(link.rel).toBe('noopener noreferrer');
  expect(link.querySelector('svg')).toMatchSnapshot();
});
