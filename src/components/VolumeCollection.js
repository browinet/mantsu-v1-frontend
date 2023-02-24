import React from "react";
import { Link } from "react-router-dom";
function VolumeCollection({ book }) {
  return (
    <div className="collection">
      <h2>{book.title} Collection</h2>
      <div className="collection-container">
        {book.volumeCovers.map((item) => (
          <div className="book-card" key={book.id + item.volume}>
            <div
              className="book-cover"
              style={{
                backgroundImage: `url(${
                  "/" +
                  item.image +
                  book.id +
                  "/" +
                  book.id +
                  "_" +
                  item.volume +
                  ".jpg"
                })`,
              }}
            ></div>
            <div className="book-type-price">
              <p>{item.type}</p>
              <p>{item.price}</p>
            </div>
            <Link to={`/api/booklist/${book.id}`}>
              <h3>{book.title}</h3>
            </Link>
            <p className="book-volume">Volume {item.volume}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VolumeCollection;
