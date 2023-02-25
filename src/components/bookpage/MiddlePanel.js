import React, { useState, useEffect } from "react";
import VolumeCollection from "../VolumeCollection";
import { useParams } from "react-router-dom";
import axios from "axios";
import API from "../../api";

function MiddlePanel({ book }) {
  const [bookCollection, setBookCollection] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { bookpage } = useParams();
  useEffect(() => {
    axios
      .get(`${API}/api/booklist/${bookpage}`)
      .then((response) => {
        setBookCollection(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, [bookpage]);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="middle-panel">
      <div className="mp-container">
        <h1>Genre</h1>
        <div className="book-tag-container">
          {book.genre.map((genre) => (
            <p className="book-tags" key={genre}>
              {genre}
            </p>
          ))}
        </div>
      </div>
      <div className="mp-container">
        <h1>Description</h1>
        <p className="book-page-paragraph">{book.description}</p>
      </div>
      <div className="mp-container">
        <h1>Categories</h1>
        <div className="book-tag-container">
          {book.categories.map((category) => (
            <p className="book-tags" key={category}>
              {category}
            </p>
          ))}
        </div>
      </div>
      <div className="mp-container">
        <VolumeCollection key={bookCollection.id} book={bookCollection} />
      </div>
    </div>
  );
}

export default MiddlePanel;
