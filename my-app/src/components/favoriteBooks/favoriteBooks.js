import React from "react";

const BookList = ({ books }) => (
  <>
    <h2>BookList</h2>
    <ul>
      {books.map((book, index) => (
        <li key={index}>{book.name}</li>
      ))}
    </ul>
  </>
);

export default BookList;
