import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import API from "../api";
import Banner from "../components/Banner";
import VolumeCollection from "../components/VolumeCollection";

function Home() {
  const [bookCollection, setBookCollection] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { bookpage } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/api/booklist`)
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
