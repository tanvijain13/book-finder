import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  test('renders Navbar and Search components', () => {
    const { getByText } = render(<Header />);
    
    // Assert that Navbar component is rendered
    expect(getByText('Navbar')).toBeInTheDocument();
    
    // Assert that Search component is rendered
    expect(getByText('Search')).toBeInTheDocument();
  });

  test('renders header title', () => {
    const { getByText } = render(<Header />);
    
    // Assert that header title is rendered
    expect(getByText('Discover your next favorite book')).toBeInTheDocument();
  });
});
