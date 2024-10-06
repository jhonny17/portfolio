import { beforeEach, expect, it, vi } from 'vitest';
import GitHubCalendar from 'react-github-calendar';
import { render, screen } from '@testing-library/react';

import Home from './page';

vi.mock('react-github-calendar', () => ({
  default: vi.fn().mockImplementation(({ username }) => {
    return <div>{username}</div>;
  }),
}));

const mockedGitHubCalendar = vi.mocked(GitHubCalendar);

beforeEach(() => {
  vi.clearAllMocks();
});

it('renders GitHubCalendar', async () => {
  render(<Home />);
  expect(
    screen.getByText(process.env.NEXT_PUBLIC_GITHUB_USERNAME),
  ).toBeInTheDocument();
});
