import React from "react";


function BookCard({ title, price, image, url }) {
  return (
    <div className="book-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{price}</p>
      <a href={url}>Learn More</a>
    </div>
  );
}

export default BookCard;
