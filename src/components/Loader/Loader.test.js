import React from 'react';
import { render, screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import Loader from './Loader';

describe('Loader', () => {
  test('renders loader with image', () => {
    render(<Loader />);
    
    // Assert that loader element is rendered
    const loaderElement = screen.getByTestId('loader');
    expect(loaderElement).toBeInTheDocument();
    
    // Assert that image is rendered with the correct source and alt text
    const imageElement = screen.getByAltText('loading');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.getAttribute('src')).toMatch(/loader\.gif$/);
  });
});
