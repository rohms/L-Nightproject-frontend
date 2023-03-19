import React, { useState } from "react";
import GalleryPics from "./Gallerypics";
import "../Styles/Gallery.css";
import CloseIcon from "@material-ui/icons/Close";
import ImageUpload from "./ImageUpload";
import useAuthContext from "../../hooks/useAuthContext";
import "../Styles/Style.css";
import GettingPics from "./GettingPics";
import axios from "axios";

const S3Pics = process.env.REACT_APP_PICTURES_GET;

const Gallery = () => {
  const { isLogged, user } = useAuthContext();
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const [images, setImages] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  console.log(isLogged);

  const getPictures = () => {
    axios
      .get("https://d205oa7gfrzfmi.cloudfront.net/", {})
      .then((res) => {
        setImages(res);
        console.log("response", res);
      })
      .catch((err) => console.log("err", err));
  };
  getPictures();

  console.log("my images from cloudfront", images);

  return (
    <div className="thewholegallery">
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="gallery" />
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
        <div>
          {/* {images.map((item) => {
            <img src={item} alt="s3 picture" width="400" />;
          })} */}
          {/* <img
            // src="http://localhost:4000/pictures/HeissaHolzmarkt.jpeg"
            src="https://d205oa7gfrzfmi.cloudfront.net/HeissaHolzmarkt.jpeg"
            alt="s3 picture"
            width="400"
          /> */}
        </div>
      </div>

      {/* <GettingPics /> */}
      {isLogged ? <ImageUpload /> : null}
    </div>
  );
};

export default Gallery;
