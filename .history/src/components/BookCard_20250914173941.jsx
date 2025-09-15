import React from "react";
import "./BookCard.css";

function BookCard({ title, author, image, isNew }) {
  return (
    <div className="book-card">
      {isNew ? (
        <div className="new-card">New</div>
      ) : (
        <>
          <img src={image} alt={title} className="book-image" />
          <p className="author">by {author}</p>
          <button className="learn-btn">Learn more</button>
        </>
      )}
    </div>
  );
}

export default BookCard;
