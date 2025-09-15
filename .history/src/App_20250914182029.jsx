import React from "react";
import Header from "./components/Header";
import BookList from "./components/BookList";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Header />
      <BookList />
    </div>
  );
}

export default App;