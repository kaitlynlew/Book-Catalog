import React from "react";
import BookCard from "./BookCard";
import "./BookList.css";
import booksData from "../../data/books.json";

import programmingBook from "/images/programming-book.png";
import firewallsBook from "/images/firewalls-book.png";

// function BookList() {
// const books = [
//     { isNew: true },
//     {
//     title: "Programming for Absolute Beginners",
//     author: "Jonathan Bartlett",
//     image: programmingBook,
//     link: "https://itbook.store/books/9781484287507",
//     },
//     {
//     title: "Version Control with Git",
//     author: "Carey Parker",
//     image: firewallsBook,
//     link: "https://itbook.store/books/9781484290354",
//     },
//     ];

    
// return (
//     <div className="book-list">
//     {books.map((book, index) => (
//         <BookCard key={index} {...book} />
//     ))}
//     </div>
// );
// }

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
