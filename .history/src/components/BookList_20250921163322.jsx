import React from "react";
import BookCard from "./BookCard";
import "./BookList.css";
import booksData from "../../data/books.json";

function BookList() {
  return (
    <div className="book-list">
      {booksData.map((book) => (
        <BookCard key={book.id} {...book} />
      ))}
      <BookCard isNew={true} />
    </div>
  );
}

export default BookList;


