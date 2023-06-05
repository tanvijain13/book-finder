import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import Search from './Search';
import { useGlobalContext } from '../../context';

jest.mock('../../context', () => ({
  useGlobalContext: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('Search', () => {
  test('renders search input and button', () => {
    render(<Search />);

    const searchInput = screen.getByPlaceholderText('Enter book title');
    const searchButton = screen.getByRole('button');

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  test('calls setSearchTerm and navigate on form submission', () => {
    const setSearchTerm = jest.fn();
    const navigate = jest.fn();

    useGlobalContext.mockReturnValue({
      setSearchTerm,
      setResultTitle: jest.fn(),
    });

    useNavigate.mockReturnValue(navigate);

    render(<Search />);

    const searchInput = screen.getByPlaceholderText('Enter book title');
    const searchButton = screen.getByRole('button');

    const searchTerm = 'The Lost World';

    fireEvent.change(searchInput, { target: { value: searchTerm } });
    fireEvent.click(searchButton);

    expect(setSearchTerm).toHaveBeenCalledTimes(1);
    expect(setSearchTerm).toHaveBeenCalledWith(searchTerm);

    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('/bookslisthome');
  });

  test('sets default search term and result title if input is empty', () => {
    const setSearchTerm = jest.fn();
    const setResultTitle = jest.fn();

    useGlobalContext.mockReturnValue({
      setSearchTerm,
      setResultTitle,
    });

    useNavigate.mockReturnValue(jest.fn());

    render(<Search />);

    const searchInput = screen.getByPlaceholderText('Enter book title');
    const searchButton = screen.getByRole('button');

    fireEvent.change(searchInput, { target: { value: '' } });
    fireEvent.click(searchButton);

    expect(setSearchTerm).toHaveBeenCalledTimes(1);
    expect(setSearchTerm).toHaveBeenCalledWith('the lost world');

    expect(setResultTitle).toHaveBeenCalledTimes(1);
    expect(setResultTitle).toHaveBeenCalledWith('Please Enter Something ...');
  });
});
