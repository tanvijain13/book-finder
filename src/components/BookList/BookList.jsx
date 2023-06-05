import React from 'react';
import { useGlobalContext } from '../../context';
import Loading from '../Loader/Loader';
import Book from './Book';
import coverImg from '../../images/no_cover.jpg';

const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();
  
  const booksWithCovers = books.map((book) => {
    return {
      ...book,
      cover_img: book.coverId? `${book.coverId}`: coverImg,
    };
  });

  console.log(booksWithCovers);

  if (loading) return <Loading />;

  return (
    <section className="booklist">
      <div className="container">
        <div className="section-title">
          <h2>{resultTitle}</h2>
        </div>
        <div className="booklist-content grid">
          {booksWithCovers.slice(0, 30).map((item, index) => {
            return <Book key={index} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default BookList;
