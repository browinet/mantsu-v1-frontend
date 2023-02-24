import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Banner from "../components/Banner";
import VolumeCollection from "../components/VolumeCollection";

function Home() {
  const [bookCollection, setBookCollection] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { bookpage } = useParams();
  useEffect(() => {
    axios
      .get(`/api/booklist/`)
      .then((response) => {
        setBookCollection(response.data);
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
    return <div>HomePage Error: {error}</div>;
  }
  return (
    <div className="home-page">
      <Banner />
      {bookCollection.map((bookCollection) => (
        <VolumeCollection key={bookCollection.id} book={bookCollection} />
      ))}
    </div>
  );
}

export default Home;
