import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import API from "../api";
function BookList() {
  const [booklist, setBooklist] = useState();

  const [votes, setVotes] = useState(0);

  useEffect(() => {
    const loadBooklist = async () => {
      const response = await axios.get(`${API}/api/booklist/`);
      const newBooklist = response.data;
      setBooklist(newBooklist);
    };
    loadBooklist();
  }, [votes]);

  const addUpvote = async (booklist) => {
    const response = await axios.put(`${API}/api/booklist/${booklist}/upvote`);
    const newBooklist = response.data;
    setVotes(newBooklist);
  };

  const addDownvote = async (booklist) => {
    const response = await axios.put(
      `${API}/api/booklist/${booklist}/downvote/`
    );
    const newBooklist = response.data;
    setVotes(newBooklist);
  };

  return (
    <div className="booklist-container">
      <h1>Ranking</h1>
      {booklist &&
        booklist.map((booklist) => (
          <div key={booklist._id} className="ranking-booklist">
            <div className="ranking-button-container">
              <div className="ranking-button">
                <button onClick={() => addUpvote(booklist.id)}>&#x2191;</button>
                <button onClick={() => addDownvote(booklist.id)}>
                  &#x2193;
                </button>
              </div>
              <p>{booklist.votes}</p>
            </div>
            <h3>
              <Link to={`/api/booklist/${booklist.id}`}>{booklist.title}</Link>
            </h3>
            <h3>{booklist.author}</h3>
          </div>
        ))}
    </div>
  );
}
export default BookList;
