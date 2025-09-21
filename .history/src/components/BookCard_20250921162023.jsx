import React from "react";


function BookCard({ title, price, image, isNew, url }) {
  return (
    <div className="book-card">
      {isNew ? (
        <div className="new-card">New</div>
      ) : (
        <>
        </>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{price}</p>
      <a href={url}>Learn More</a>
    </div>
  );
}

export default BookCard;