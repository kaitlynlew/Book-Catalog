// import React from "react";
// import BookCard from "./BookCard";
// import booksData from "../../data/books.json";

// function BookList() {
//   return (
//     <div className="book-list">
//       {booksData.map((book) => (
//         <BookCard key={book.id} {...book} />
//       ))}
//     </div>
//   );
// }

// export default BookList;

import React from "react";
import BookCard from "./BookCard";
import booksData from "../../data/books.json";

function BookList() {
    return (
    <div className="book-list">
    {books.map((book, index) => (
        <BookCard
        key={index}
        title={book.title}
        price={book.price}
        image={book.image}
        url={book.url}
        />
    ))}
    </div>
);
}

export default BookList;

