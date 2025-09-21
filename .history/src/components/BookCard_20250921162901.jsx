import React from "react";
import "./BookCard.css";

function BookCard({ title, price, image, isNew, url }) {
  return (
    <div className="book-card">
      {isNew ? (
        <div className="new-card">New</div>
      ) : (
        <>
      <img src={image} alt={title} className="book-image"/>
      <p>{price}</p>
      <a href={url} className="learn-btn">Learn More</a>
      </>
      )}
    </div>
  );
}

export default BookCard;