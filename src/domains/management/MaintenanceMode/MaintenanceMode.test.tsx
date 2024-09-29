import { render, screen } from '@testing-library/react';
import { beforeEach, expect, it, vi } from 'vitest';

import { getFeatureFlag } from '@/utils/FeatureFlag';

import { MaintenanceMode } from './MaintenanceMode';

vi.mock('@/utils/FeatureFlag');

const mockedGetFeatureValue = vi.mocked(getFeatureFlag);

beforeEach(() => {
  vi.clearAllMocks();
  mockedGetFeatureValue.mockResolvedValue(true);
});

it('renders the title', async () => {
  render(await MaintenanceMode({}));
  const title = screen.getByRole('heading', {
    name: /^Jhonny Vargas Arias$/,
    level: 1,
  });
  expect(title).toBeInTheDocument();
});

it('renders the subtitle', async () => {
  render(await MaintenanceMode({}));
  const subtitle = screen.getByText(/^Portfolio$/);
  expect(subtitle).toBeInTheDocument();
});

it('renders the message', async () => {
  render(await MaintenanceMode({}));
  const message = screen.getByText(
    /^This page is currently under development.$/,
  );
  expect(message).toBeInTheDocument();
});

it('renders the update message', async () => {
  render(await MaintenanceMode({}));
  const updateMessage = screen.getByText(/^Stay tuned for updates!$/);
  expect(updateMessage).toBeInTheDocument();
});

it('renders the content when the feature flag is false', async () => {
  mockedGetFeatureValue.mockResolvedValue(false);
  const content = 'Real Content';
  render(await MaintenanceMode({ children: <h1>{content}</h1> }));
  const title = screen.getByRole('heading', {
    name: content,
    level: 1,
  });
  expect(title).toBeInTheDocument();
});
