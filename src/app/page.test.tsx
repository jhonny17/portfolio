import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Page from './page';

describe('App Page', () => {
  describe('maintenance mode', () => {
    it('should render maintenance mode', () => {
      render(<Page />);
      expect(
        screen.getByText('This page is currently under development.'),
      ).toBeInTheDocument();
    });
  });
});
