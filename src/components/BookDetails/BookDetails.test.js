import React from 'react';
import { render, screen } from '@testing-library/react';
import { useNavigate, useParams } from 'react-router-dom';
import fetchMock from 'jest-fetch-mock';
import BookDetails from './BookDetails';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  useParams: jest.fn(),
}));

// Configure fetch mock
fetchMock.enableMocks();

describe('BookDetails', () => {
  beforeEach(() => {
    useParams.mockReturnValue({ id: '123' });
    useNavigate.mockReturnValue(jest.fn());
  });

  test('renders loading state when book details are being fetched', () => {
    render(<BookDetails />);

    expect(screen.getByText('Loading book details...')).toBeInTheDocument();
  });

  test('renders book details when details are available', async () => {
    const mockBookDetails = {
      title: 'Book Title',
      authors: ['Author 1', 'Author 2'],
      description: 'Book description',
      imageLinks: { thumbnail: 'thumbnail.jpg' },
      publishedDate: '2023-06-01',
    };

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({ volumeInfo: mockBookDetails }),
    });

    render(<BookDetails />);

    // Wait for book details to be fetched and rendered
    await screen.findByText(mockBookDetails.title);

    expect(screen.getByText(mockBookDetails.title)).toBeInTheDocument();
    expect(screen.getByText(`Published Date: ${mockBookDetails.publishedDate}`)).toBeInTheDocument();
    expect(screen.getByText(`Author: ${mockBookDetails.authors.join(', ')}`)).toBeInTheDocument();
    expect(screen.getByText(mockBookDetails.description)).toBeInTheDocument();
    // Add more assertions for other book details as needed
  });

  test('handles error when book details cannot be fetched', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: false });

    console.error = jest.fn(); // Mock console.error to prevent error logs from cluttering the test output

    render(<BookDetails />);

    // Wait for error handling to be rendered
    await screen.findByText('Error fetching book details');

    expect(console.error).toHaveBeenCalledWith('Error fetching book details');
    expect(screen.getByText('Error fetching book details')).toBeInTheDocument();
  });
});
