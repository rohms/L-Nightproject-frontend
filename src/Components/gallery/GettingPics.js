import React, { useState, useEffect } from "react";
import "../../Styles/Gallery.css";
import axios from "axios";

const PicURL = process.env.REACT_APP_PICTURES_GET;
const GettingAllPics = process.env.REACT_APP_PICTURES_GET_ALL;

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

          // headers: {
          //   "Content-Type": "image/png" || "image/jpg" || "image/jpeg",
          // },
          signal,
        });
        // console.log('response from fetching pics', response)
        setPictures(response.data);
        setError(null);
      } catch (error) {
        setError(error);
        setPictures([]);
      } finally {
        setLoading(false);
      }
    };
    getPics();

    // return () => {
    //   controller.abort();
    // };
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
