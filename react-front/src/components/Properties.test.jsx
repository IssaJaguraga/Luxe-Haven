import React from 'react';
import { render, screen } from '@testing-library/react';
import Properties from './Properties';

test('renders Properties component with listings', () => {
  render(<Properties />);
  expect(screen.getAllByText(/title card properties/i)).toHaveLength(4);
});