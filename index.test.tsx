import * as React from 'react';

import { describe, expect, it } from 'vitest';

import { render, screen } from '@testing-library/react';

import { App } from './index';

describe('App', () => {
  it('renders with name', () => {
    render(<App name="Taro" />);
    screen.debug();
    const AppNode = screen.getByText(/^Hello!/);
    expect(AppNode.textContent).toBe('Hello! Taro');
  });
});
