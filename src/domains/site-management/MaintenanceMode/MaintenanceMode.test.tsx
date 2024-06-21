import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { MaintenanceMode } from './MaintenanceMode';

describe('MaintenanceMode', () => {
  it('should render the title', () => {
    render(<MaintenanceMode />);
    const title = screen.getByRole('heading', {
      name: /^Jhonny Vargas Arias$/,
      level: 1,
    });
    expect(title).toBeInTheDocument();
  });

  it('should render the subtitle', () => {
    render(<MaintenanceMode />);
    const subtitle = screen.getByText(/^Portfolio$/);
    expect(subtitle).toBeInTheDocument();
  });

  it('should render the message', () => {
    render(<MaintenanceMode />);
    const message = screen.getByText(
      /^This page is currently under development.$/,
    );
    expect(message).toBeInTheDocument();
  });

  it('should render the update message', () => {
    render(<MaintenanceMode />);
    const updateMessage = screen.getByText(/^Stay tuned for updates!$/);
    expect(updateMessage).toBeInTheDocument();
  });
});
