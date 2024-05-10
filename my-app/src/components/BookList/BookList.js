import React from "react";


const BookList = ({ books }) => (
  <>
    <h2>BookList</h2>
    <button
      onClick={(event) =>
        console.log(event, event.currentTarget, event.timeStamp)
      }
    >
      Click default book!
    </button>
    <ul>
      {books.map((book, index) => (
        <li key={index}>{book.name}</li>
      ))}
    </ul>
  </>
);

export default BookList;
