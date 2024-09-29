import { expect, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';

import Home from './page';

it('renders the page', async () => {
  render(<Home />);
  await waitFor(() => {
    expect(screen.getByText('Real Content')).toBeInTheDocument();
  });
});
