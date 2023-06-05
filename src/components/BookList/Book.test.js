import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Book from './Book';
import '@testing-library/jest-dom/extend-expect'; // Import jest-dom for custom matchers

describe('Book', () => {
  const book = {
    id: 1,
    title: 'Book Title',
    authors: 'Author Name',
    cover_img: 'book_cover.jpg',
  };

  test('renders book details correctly', () => {
    render(
      <BrowserRouter>
        <Book {...book} />
      </BrowserRouter>
    );

    const bookTitle = screen.getByText(/Book Title/i);
    const bookAuthor = screen.getByText(/Author:/i);
    const viewDetailsButton = screen.getByRole('button', { name: 'View Details' });

    expect(bookTitle).toBeInTheDocument();
    expect(bookAuthor).toBeInTheDocument();
    expect(bookAuthor.nextSibling).toHaveTextContent('Author Name');
    expect(viewDetailsButton).toBeInTheDocument();
    expect(viewDetailsButton).toHaveAttribute('href', '/bookslisthome/1');
  });

  test('renders book cover image with alt text', () => {
    render(
      <BrowserRouter>
        <Book {...book} />
      </BrowserRouter>
    );

    const bookCoverImage = screen.getByAltText(/cover/i);

    expect(bookCoverImage).toBeInTheDocument();
    expect(bookCoverImage).toHaveAttribute('src', 'book_cover.jpg');
  });
});
