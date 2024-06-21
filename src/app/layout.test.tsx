import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Inter } from 'next/font/google';

import Layout, { metadata, viewport } from './layout';

vi.mock('next/font/google', async () => {
  const library = await vi.importActual('next/font/google');
  return {
    ...library,
    Inter: vi.fn().mockImplementation((param) => param),
  };
});

describe('metadata', () => {
  it('should have the correct title', () => {
    expect(metadata.title).toBe('Jhonny Vargas Arias | Portfolio');
  });

  it('should have the correct description', () => {
    expect(metadata.description).toBe(
      "Jhonny Vargas Arias' portfolio showcasing software engineering projects, skills, and experience in front-end and back-end development. Connect with me on GitHub: https://github.com/jhonny17",
    );
  });

  describe('openGraph', () => {
    it('should have the correct url', () => {
      expect(metadata?.openGraph?.url).toBe('https://jhonnyvargasarias.com');
    });
    it('should have the correct title', () => {
      expect(metadata?.openGraph?.title).toBe(
        'Jhonny Vargas Arias | Portfolio',
      );
    });

    it('should have the correct description', () => {
      expect(metadata?.openGraph?.description).toBe(
        "Explore Jhonny Vargas Arias' portfolio featuring innovative software engineering projects and comprehensive skills in modern technologies.",
      );
    });
  });
});

describe('viewport', () => {
  it('should have the correct width', () => {
    expect(viewport.width).toBe('device-width');
  });

  it('should have the correct initialScale', () => {
    expect(viewport.initialScale).toBe(1);
  });
});

describe('Root Layout', () => {
  const childrenText = 'Default Children Text';

  it('should render children', () => {
    render(<Layout>{childrenText}</Layout>);
    expect(screen.getByText(childrenText)).toBeTruthy();
  });

  it('should render Inter font', () => {
    render(<Layout>{childrenText}</Layout>);
    expect(Inter).toHaveBeenCalledWith({ subsets: ['latin'] });
  });
});
