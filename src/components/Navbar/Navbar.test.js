import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import '@testing-library/jest-dom/extend-expect'; // Import custom matchers

describe('Navbar', () => {
  test('renders logo', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const logoElement = screen.getByAltText('logo');
    expect(logoElement).toBeInTheDocument();
  });

  test('toggles menu when toggler button is clicked', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
  
    const togglerButton = screen.getByRole('button');
    fireEvent.click(togglerButton);
  
    const navbarContainer = screen.getByTestId('navbar-container');
    expect(navbarContainer).toHaveClass('show-navbar-collapse');
  });
  

  test('navigates to correct route when a navigation link is clicked', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const homeNavLink = screen.getByText('Home');
    fireEvent.click(homeNavLink);
    expect(window.location.pathname).toBe('/bookslisthome');

    const aboutNavLink = screen.getByText('about');
    fireEvent.click(aboutNavLink);
    expect(window.location.pathname).toBe('/about');
  });
});
