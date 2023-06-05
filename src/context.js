import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';
import axios from "axios";

const API_KEY = "AIzaSyAKGfCHS7p2PIUXtJVOoX2reniPuqHdX-4";
const URL = "https://www.googleapis.com/books/v1/volumes";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("calendar");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(URL, {
        params: {
          q: searchTerm,
          key: API_KEY,
          maxResults: 40,
        }
      });
      const data = response.data;
      const { items } = data;

      if (items) {
        const parsedBooks = items.map((book) => ({
          // Map the relevant properties from the API response to the book object
          id: book.id,
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Unknown",
          description: book.volumeInfo.description,
          coverId: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null,
          publishedDate: book.volumeInfo.publishedDate ? book.volumeInfo.publishedDate : "Unknown",

          // Add more properties as needed
        }));

        setBooks(parsedBooks);

        if (parsedBooks.length > 0) {
          setResultTitle("Your Search Result");
        } else {
          setResultTitle("No Search Result Found!");
        }

       
      } else {
        setBooks([]);
        setResultTitle("No Search Result Found!");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks]);

  return (
    <AppContext.Provider value={{
      loading, books, setSearchTerm, resultTitle, setResultTitle,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
