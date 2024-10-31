import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Inter } from 'next/font/google';

import Layout, { metadata, viewport } from './layout';
import { ReactNode } from 'react';

vi.mock('next/font/google', async () => {
  const library = await vi.importActual('next/font/google');
  return {
    ...library,
    Inter: vi.fn().mockImplementation((param) => param),
    Orbitron: vi.fn().mockImplementation((param) => param),
  };
});

vi.mock('@/contexts/FeatureFlag', () => {
  const actual = vi.importActual('@/contexts/FeatureFlag');
  return {
    ...actual,
    useFeatureFlag: vi.fn().mockReturnValue(false),
    FeatureFlagProvider: ({ children }: { children?: ReactNode }) => children,
  };
});

describe('metadata', () => {
  it('has the correct title', () => {
    expect(metadata.title).toBe('Jhonny Vargas Arias | Portfolio');
  });

  it('has the correct description', () => {
    expect(metadata.description).toBe(
      "Jhonny Vargas Arias' portfolio showcasing software engineering projects, skills, and experience in front-end and back-end development. Connect with me on GitHub: https://github.com/jhonny17",
    );
  });

  it('has the correct openGraph.url', () => {
    expect(metadata?.openGraph?.url).toBe('https://jhonnyvargasarias.com');
  });
  it('has the correct openGraph.title', () => {
    expect(metadata?.openGraph?.title).toBe('Jhonny Vargas Arias | Portfolio');
  });

  it('has the correct openGraph.description', () => {
    expect(metadata?.openGraph?.description).toBe(
      "Explore Jhonny Vargas Arias' portfolio featuring innovative software engineering projects and comprehensive skills in modern technologies.",
    );
  });
});

describe('viewport', () => {
  it('has the correct width', () => {
    expect(viewport.width).toBe('device-width');
  });

  it('has the correct initialScale', () => {
    expect(viewport.initialScale).toBe(1);
  });
});

describe('Root Layout', () => {
  const childrenText = 'Default Children Text';

  it('renders Inter font', () => {
    render(<Layout>{childrenText}</Layout>, { container: document });
    expect(Inter).toHaveBeenCalledWith({ subsets: ['latin'] });
  });

  it('renders Orbitron font', () => {
    render(<Layout>{childrenText}</Layout>, { container: document });
    expect(Inter).toHaveBeenCalledWith({ subsets: ['latin'] });
  });

  it('renders children', () => {
    render(<Layout>{childrenText}</Layout>, { container: document });
    expect(screen.getByText(childrenText)).toBeInTheDocument();
  });

  it('renders the navbar', () => {
    render(<Layout>{childrenText}</Layout>, { container: document });
    expect(screen.getByRole('navigation')).toBeInTheDocument;
  });

  it('renders the footer', () => {
    render(<Layout>{childrenText}</Layout>, { container: document });
    expect(screen.getByRole('contentinfo')).toBeInTheDocument;
  });
});
