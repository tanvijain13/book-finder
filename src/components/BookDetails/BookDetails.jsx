import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './BookDetails.css';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
        if (response.ok) {
          const data = await response.json();
          setBookDetails(data.volumeInfo);
        } else {
          // Handle the case when the book details could not be fetched
          console.error('Error fetching book details');
        }
      } catch (error) {
        console.error('Error fetching book details', error);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (!bookDetails) {
    // Handle the case when the book details are being fetched
    return (
      <section className="book-details">
        <div className="container">
          <button type="button" className="flex flex-c back-btn" onClick={() => navigate('/bookslisthome')}>
            <FaArrowLeft size={22} />
            <span className="fs-18 fw-6">Go Back</span>
          </button>
          <p>Loading book details...</p>
        </div>
      </section>
    );
  }

  const { title, authors, description, imageLinks, publishedDate } = bookDetails;

  return (
    <section className="book-details">
      <div className="container">
        <button type="button" className="flex flex-c back-btn" onClick={() => navigate('/bookslisthome')}>
          <FaArrowLeft size={22} />
          <span className="fs-18 fw-6">Go Back</span>
        </button>

        <div className="book-details-content grid">
          <div className="book-details-img">
            <img src={imageLinks?.thumbnail} alt="cover img" />
          </div>
          <div className="book-details-info">
            <div className="book-details-item title">
              <span className="fw-6 fs-24">{title}</span>
            </div>
           
            <div className="book-details-item publishedDate">
              <span className="fw-7">Published Date:</span> {publishedDate}
            </div>
            <div className="book-details-item author">
              <span className="fw-7">Author:</span> {authors?.join(', ')}
            </div>
            <div className="book-details-item description" 
            dangerouslySetInnerHTML={{ __html: description }} />
            {/* Add more book details as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
