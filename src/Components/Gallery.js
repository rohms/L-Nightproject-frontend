import React, { useState, useEffect } from "react";
import GalleryPics from "./Gallerypics";
import "../Components/Styles/Gallery.css";
import CloseIcon from "@material-ui/icons/Close";
import ImageUpload from "./ImageUpload";
import useAuthContext from "../hooks/useAuthContext";
import axios from "axios";

const S3Pics = process.env.REACT_APP_PICTURES_GET;

const Gallery = () => {
  const { isLogged, user } = useAuthContext();
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  console.log(isLogged);
  return (
    <div className="thewholegallery">
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <h2>Gallery</h2>
      <div className="Gallerypicscontainer">
        {GalleryPics.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              {" "}
              <img
                src={`${item.imgSrc}`}
                style={{ width: "100%" }}
                srcSet={`${item.imgSrc}`}
                alt={item.title}
                loading="lazy"
              />
            </div>
          );
        })}
      </div>

      {/* <GalleryPictures /> */}
      {isLogged ? <ImageUpload /> : null}
    </div>
  );
};

export default Gallery;
