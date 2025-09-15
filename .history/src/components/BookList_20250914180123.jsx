import React from "react";
import BookCard from "./BookCard";
import "./BookList.css";

import programmingBook from "/images/programming-book.png";
import firewallsBook from "/images/firewalls-book.png";

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
    image: firewallsBook,
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
