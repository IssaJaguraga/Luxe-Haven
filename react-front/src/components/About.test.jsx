import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

test('renders About component with expected content', () => {
  render(<About />);
  expect(screen.getByText(/about|à propos/i)).toBeInTheDocument();
});