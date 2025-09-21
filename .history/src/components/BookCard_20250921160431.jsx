// import React from "react";
// import "./BookCard.css";

// function BookCard({ title, price }) {
//   return (
//     <div className="book-card">
//       <img src={image} alt={title} />
//       <h2>{title}</h2>
//       <p>${price}</p>
//     </div>
//   );
// }


// export default BookCard;

import React from "react";

function BookCard({ title, price, image }) {
  return (
    <div className="book-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{price}</p>
      <a>Learn More</a>
    </div>
  );
}

export default BookCard;
