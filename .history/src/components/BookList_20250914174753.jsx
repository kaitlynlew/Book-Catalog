import React from "react";
import BookCard from "./BookCard";
import "./BookList.css";

import proReact from "./assets/programming-book.jpg";
import gitBook from "./assets/firewalls-git.jpg";

function BookList() {
  const books = [
    { isNew: true },
    {
      title: "Programming for Absolute Beginners",
      author: "Jonathan Bartlett",
      image: proReact,
    },
    {
      title: "Version Control with Git",
      author: "Prem Kumar Ponuthurai, Jon Loeliger",
      image: gitBook,
    },
  ];

  return (
    <div className="book-list">
      {books.map((book, index) => (
        <BookCard key={index} {...book} />
      ))}
    </div>
  );
}

export default BookList;
