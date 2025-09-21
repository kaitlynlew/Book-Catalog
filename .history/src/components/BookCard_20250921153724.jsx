import React from "react";
import "./BookCard.css";
import booksData from "../../data/books.json";

// function BookCard({ title, author, image, isNew, link }) {
//   return (
//     <div className="book-card">
//       {isNew ? (
//         <div className="new-card">New</div>
//       ) : (
//         <>
//           <img src={image} alt={title} className="book-image" />
//           <p className="author">by {author}</p>
//           <p>${price}</p>

//         </>
//       )}
//     </div>
//   );
// }

function BookCard() {
  return (
    <div>
      {booksData.map((book) => (
        <div key={book.id}>
          <p>{book.title}</p>
          <p>${book.price}</p>
          //           <a 
//             href={link} 
//             className="learn-btn"
//           >
//           Learn more
//           </a>
        </div>
      ))}
    </div>
  );
}

export default BookCard;
