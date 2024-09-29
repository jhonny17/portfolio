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

vi.mock('@/utils/FeatureFlag', async () => {
  const actual = await vi.importActual('@/utils/FeatureFlag');
  return {
    ...actual,
    getFeatureFlag: vi.fn().mockResolvedValue(false),
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
