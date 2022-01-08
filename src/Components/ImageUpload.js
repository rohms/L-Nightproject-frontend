import React, { useState } from "react";
import "./Styles/Gallery.css";
import axios from "axios";

const ImageUpload = () => {
  const [image, setImage] = useState("");

  const PicURL = process.env.REACT_APP_PICTURES_URL;

  const handleChange = (e) => {
    setImage({ picture: e.target.files[0] });
    console.log(e.target.files[0]);
  };

  const submitPicture = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("picture", image.picture);
    await axios
      .post(PicURL, formData, {})
      .then((res) => {
        console.log(res);
        if (res.data == "Wrong filetype") alert("Not a valid image format");
        else {
          alert("File was uploaded");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="imageUpload">
      <h2>Upload Image</h2>
      <form onSubmit={submitPicture} encType="multipart/form-data">
        <input
          type="file"
          name="picture"
          onChange={handleChange}
          accept="image/png, image/jpeg, image/jpg, image/gif"
        />
        <br />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default ImageUpload;
