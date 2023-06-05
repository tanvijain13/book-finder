import React from 'react';
import { render, screen } from '@testing-library/react';
import BookList from './BookList';
import { useGlobalContext } from '../../context';

jest.mock('../../context', () => ({
  useGlobalContext: jest.fn(),
}));

describe('BookList', () => {
  test('renders loading component when loading is true', () => {
    useGlobalContext.mockReturnValue({
      books: [],
      loading: true,
      resultTitle: 'Your Search Result',
    });

    render(<BookList />);

    const loadingComponent = screen.getByTestId('loader');

    expect(loadingComponent).toBeInTheDocument();
  });

  test('renders book list when loading is false', () => {
    const books = [
      {
        id: 1,
        title: 'Book 1',
        authors: 'Author 1',
        description: 'Description 1',
        coverId: 'cover1.jpg',
        publishedDate: '2021-01-01',
      },
      {
        id: 2,
        title: 'Book 2',
        authors: 'Author 2',
        description: 'Description 2',
        coverId: 'cover2.jpg',
        publishedDate: '2021-02-01',
      },
    ];

    useGlobalContext.mockReturnValue({
      books,
      loading: false,
      resultTitle: 'Your Search Result',
    });

    render(<BookList />);

    const bookListTitle = screen.getByText('Your Search Result');
    const bookItems = screen.getAllByTestId('book');

    expect(bookListTitle).toBeInTheDocument();
    expect(bookItems).toHaveLength(2);
  });
});
