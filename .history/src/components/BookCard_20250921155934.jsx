import React from "react";
import "./BookCard.css";

function BookCard({ title, price }) {
  return (
    <div className="book-card">
      <img 
        src={image} 
        alt={title} 
        className="book-image"
        style={{ width: "120px", height: "auto" }} 
      />
      <h2>{title}</h2>
      <p>${price}</p>
    </div>
  );
}


export default BookCard;

