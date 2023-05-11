import { expect } from 'vitest';

import { render, screen } from '@testing-library/react';

import { App } from './index';

describe('App', () => {
  it('renders with name', () => {
    render(<App name="Taro" />);
    screen.debug();
    expect(screen.getByText(/^Hello!/)).toBe('Hello! Taro');
  });
});
