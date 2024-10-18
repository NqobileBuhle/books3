import React, { useEffect, useState } from 'react';

const Trending = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const apiKey = "AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU";
        const query = "subject:books"; // Specify the query
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}&maxResults=40`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data.items || []); 
        console.log("Data: ", data.items);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="px-36 mt-10 bg-secondary">
      <p className="text-primary text-3xl font-bold text-center">
        The Books Everyone Is Talking About
      </p>

      <div className="grid grid-cols-4 gap-10 mt-10">
        {data.map((book) => (
          <div
            key={book.id}
            className="slate-100 border rounded-r-xl flex w-full h-full flex-col"
          >
            <img
              src={
                book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.thumbnail
                  : './books.jpg' // Fallback image
              }
              alt={book.volumeInfo.title}
              className="w-[px] rounded-t-xl"
            />
            <div className="mx-2">
              <p className="my-3 text-base">{book.volumeInfo.title}</p>
              <p className="my-3 text-lg font-bold">R 3000</p> {/* Placeholder for price */}
              <p className="my-3 text-base">
                Author:{" "}
                <span className="text-lg text-primary font-semibold">
                  {book.volumeInfo.authors
                    ? book.volumeInfo.authors.join(", ")
                    : "Unknown"}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
