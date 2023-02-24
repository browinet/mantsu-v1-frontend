import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LeftPanel from "../components/bookpage/LeftPanel";
import MiddlePanel from "../components/bookpage/MiddlePanel";
import RightPanel from "../components/bookpage/RightPanel";

function BookPage() {
  const [book, setBook] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { bookpage } = useParams();
  useEffect(() => {
    axios
      .get(`https://mantsu-v0-api.onrender.com/api/booklist/${bookpage}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(`${error.message} - ${error.response?.data?.message}`);
      });
  }, [bookpage]);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bookpage-container">
      <LeftPanel book={book} />
      <MiddlePanel book={book} />
      <RightPanel book={book} />
    </div>
  );
}

export default BookPage;
