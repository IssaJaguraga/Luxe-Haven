import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test('renders Contact component with contact info', () => {
  render(<Contact />);
  expect(screen.getAllByText(/contact/i).length).toBeGreaterThan(1);
});