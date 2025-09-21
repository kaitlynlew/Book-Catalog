import React from "react";
import "./BookCard.css";

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
//           <a 
//             href={link} 
//             className="learn-btn"
//           >
//           Learn more
//           </a>
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
          <h2>{book.title}</h2>
          <p>${book.price}</p>
        </div>
      ))}
    </div>
  );
}

export default BookCard;
