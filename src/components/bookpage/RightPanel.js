import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function RightPanel({ book }) {
  const [name, setName] = useState(null);
  const [comment, setComment] = useState(null);
  const [bookdata, setBookdata] = useState();
  const [postComment, setPostComment] = useState();

  const { bookpage } = useParams();

  useEffect(() => {
    const loadComments = async () => {
      const response = await axios.get(`/api/booklist/${bookpage}/comment`);
      const newComments = response.data;
      setBookdata(newComments);
    };
    loadComments();
  }, [postComment, bookpage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) {
      alert("Please enter a comment");
      return;
    }
    const response = await axios.post(`/api/booklist/${bookpage}/comment`, {
      postedBy: name,
      comment: comment,
      id: uuidv4(),
    });
    const newComments = response.data;
    setPostComment(newComments);
    setName("");
    setComment("");
  };

  const handleDelete = async (id) => {
    const { data: newComments } = await axios.delete(
      `/api/booklist/${bookpage}/comment/${id}`
    );
    setBookdata(newComments);
  };

  return (
    <div className="right-panel">
      <div className="rp-container">
        <h1>Comment</h1>
        <div className="poster-comment">
          <input
            className="comment-name-box"
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="comment-box"
            placeholder="Comment"
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div className="posted-comment">
          {bookdata ? (
            bookdata.comments
              .map((item) => (
                <div className="comment-container">
                  <p className="comment-name">{item.postedBy}</p>
                  <p className="comment">{item.comment}</p>
                  <div className="comment-settings">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="comment-delete"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
              .sort()
              .reverse()
          ) : (
            <p>No comments yet</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default RightPanel;
