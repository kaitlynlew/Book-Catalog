import React from "react";
import BookCard from "./BookCard";
import "./BookList.css";

import programmingBook from "./assets/programming-book.jpg";
import firewallsBook from "./assets/firewalls-git.jpg";

function BookList() {
  const books = [
    { isNew: true },
    {
      title: "Programming for Absolute Beginners",
      author: "Jonathan Bartlett",
      image: programmingBook,
    },
    {
      title: "Version Control with Git",
      author: "Prem Kumar Ponuthurai, Jon Loeliger",
      image: firewallsBookBook,
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
