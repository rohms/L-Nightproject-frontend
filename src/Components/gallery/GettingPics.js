import React, { useState, useEffect } from "react";
import "../Styles/Gallery.css";
import axios from "axios";
import "../Styles/Style.css";

const PicURL = process.env.REACT_APP_PICTURES_GET;
const GettingAllPics = `http://localhost:4000/pictures/`;
// const gettingAPic = `https://l-night-app.herokuapp.com/pictures/${key}`;

export const GettingPics = () => {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const controller = new AbortController();
  const { signal } = controller;

  useEffect(() => {
    const getPics = async () => {
      try {
        const response = await axios.get(GettingAllPics, {
          headers: {
            "Content-Type": "image/png" || "image/jpg" || "image/jpeg",
          },
          signal,
        });
        setPictures(response.pictures);
        setError(null);
      } catch (error) {
        setError(error);
        setPictures(null);
      } finally {
        setLoading(false);
      }
    };
    getPics();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <p>Pictures from S3:</p>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There was an error while fetching the amazing pictures: ${error.message}`}</div>
      )}
      {pictures &&
        pictures.map((picture) => (
          <div key={picture}>
            <img src={picture} alt="gallerypic"></img>
          </div>
        ))}
    </>
  );
};

export default GettingPics;
