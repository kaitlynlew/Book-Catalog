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
    </div>
  );
}

export default BookList;


