import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Home component with welcome message', () => {
  render(<Home />);
  expect(screen.getByText(/home|accueil/i)).toBeInTheDocument();
});