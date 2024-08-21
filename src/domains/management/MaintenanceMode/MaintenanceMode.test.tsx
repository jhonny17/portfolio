import { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { useFeatureFlag } from '@/contexts/FeatureFlag';

import { MaintenanceMode } from './MaintenanceMode';

vi.mock('@/contexts/FeatureFlag', () => {
  const actual = vi.importActual('@/contexts/FeatureFlag');
  return {
    ...actual,
    useFeatureFlag: vi.fn(),
    FeatureFlagProvider: ({ children }: { children?: ReactNode }) => children,
  };
});

describe('MaintenanceMode', () => {
  beforeEach(() => {
    vi.mocked(useFeatureFlag).mockReturnValue(true);
  });
  it('renders the title', () => {
    render(<MaintenanceMode />);
    const title = screen.getByRole('heading', {
      name: /^Jhonny Vargas Arias$/,
      level: 1,
    });
    expect(title).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<MaintenanceMode />);
    const subtitle = screen.getByText(/^Portfolio$/);
    expect(subtitle).toBeInTheDocument();
  });

  it('renders the message', () => {
    render(<MaintenanceMode />);
    const message = screen.getByText(
      /^This page is currently under development.$/,
    );
    expect(message).toBeInTheDocument();
  });

  it('renders the update message', () => {
    render(<MaintenanceMode />);
    const updateMessage = screen.getByText(/^Stay tuned for updates!$/);
    expect(updateMessage).toBeInTheDocument();
  });

  it('renders the content when the feature flag is false', () => {
    vi.mocked(useFeatureFlag).mockReturnValue(false);
    const content = 'Real Content';
    render(
      <MaintenanceMode>
        <h1>{content}</h1>
      </MaintenanceMode>,
    );
    const title = screen.getByRole('heading', {
      name: content,
      level: 1,
    });
    expect(title).toBeInTheDocument();
  });
});
