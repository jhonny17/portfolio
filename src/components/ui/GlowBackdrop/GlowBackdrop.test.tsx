import { expect, it } from 'vitest';
import { render } from '@testing-library/react';

import { GlowBackdrop } from './GlowBackdrop';

it('matches snapshot', () => {
  const { asFragment } = render(<GlowBackdrop />);
  expect(asFragment()).toMatchSnapshot();
});
