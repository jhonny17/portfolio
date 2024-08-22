import { ReactNode } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';

import { useFeatureFlag } from '@/contexts/FeatureFlag';
import { USE_MAINTENANCE_MODE } from '@/constants/feature-flags';

import Home from './page';

vi.mock('@/contexts/FeatureFlag', () => {
  const actual = vi.importActual('@/contexts/FeatureFlag');
  return {
    ...actual,
    useFeatureFlag: vi.fn(),
    FeatureFlagProvider: ({ children }: { children?: ReactNode }) => children,
  };
});

describe('Home', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it(`renders the content when the '${USE_MAINTENANCE_MODE}' flag is false`, async () => {
    vi.mocked(useFeatureFlag).mockReturnValue(false);
    render(<Home />);
    expect(screen.getByText('Real Content')).toBeInTheDocument();
  });

  it(`renders the maintenance mode when the '${USE_MAINTENANCE_MODE}' flag is true`, async () => {
    vi.mocked(useFeatureFlag).mockReturnValue(true);
    render(<Home />);
    await waitFor(() => {
      expect(
        screen.getByText('This page is currently under development.'),
      ).toBeInTheDocument();
    });
  });
});
