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

function BookCard({ title, price }) {
  return (
    <div className="border rounded-xl shadow p-4">
      <h2>{title}</h2>
      <p>${price}</p>
    </div>
  );
}


export default BookCard;

