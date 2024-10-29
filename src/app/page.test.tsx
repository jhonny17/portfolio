import { beforeEach, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import Home from './page';

vi.mock('react-github-calendar', () => ({
  default: vi.fn().mockImplementation(({ username }) => {
    return <div>{username}</div>;
  }),
}));

beforeEach(() => {
  vi.clearAllMocks();
});

it('renders GitHubCalendar', async () => {
  render(<Home />);
  expect(
    screen.getByText(process.env.NEXT_PUBLIC_GITHUB_USERNAME),
  ).toBeInTheDocument();
});
