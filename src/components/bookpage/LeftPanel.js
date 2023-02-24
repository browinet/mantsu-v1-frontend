import React from "react";

function LeftPanel({ book }) {
  return (
    <div className="left-panel">
      <div className="lp-container">
        <h1>{book.title}</h1>
        <div
          className="bookpage-cover"
          style={{
            backgroundImage: `url(/imgs/covers/${book.id}/${book.id}_01.jpg)`,
          }}
        ></div>
      </div>
      <div className="lp-container">
        <h4>Author|Artist</h4>
        <h3>{book.author}</h3>
      </div>
      <div className="lp-container">
        <h4>Serizlied In</h4>
        <h3>{book.magazine}</h3>
      </div>
      <div className="lp-container">
        <h4>Publisher</h4>
        <h3>{book.publisher}</h3>
      </div>
      <div className="lp-container">
        <h4>Year</h4>
        <h3>{book.year}</h3>{" "}
      </div>

      <p></p>
    </div>
  );
}

export default LeftPanel;
