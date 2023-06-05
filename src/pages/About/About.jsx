import React from 'react'
import "./About.css";


const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        

        <div className='about-content grid'>
         
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Book Finder</h2>
            <p className='fs-17'>Welcome to Book Finder, the ultimate destination for finding your favorite books! Our mission is to make it easy
          for book lovers to discover, explore, and find new reads. Whether you're looking for bestsellers, classics,
          or niche genres, we've got you covered. <br></br> Our platform provides a comprehensive database of books from various authors, publishers, and genres. You can
          search for books by title, author, genre, or ISBN. We strive to deliver accurate and up-to-date information
          about each book, including summaries, reviews, and availability.<br></br>Book Finder is designed to be user-friendly and intuitive. Our advanced search features allow you to refine
          your results based on your preferences, making it easier to discover books that match your interests. You can
          create an account to save your favorite books, leave reviews, and interact with other book enthusiasts.<br></br>Thank you for choosing Book Finder. We hope you enjoy your journey through the world of books and make many
          exciting discoveries along the way! </p>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default About