import React, { useState } from "react";
import "../Styles/Gallery.css";
import axios from "axios";
import "../Styles/Style.css";
import { toast } from "react-toastify";

const ImageUpload = () => {
  const [images, setImages] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadError, setUploadError] = useState("");

  const PicURL = process.env.REACT_APP_PICTURES_URL;

  const picsUrl = "http://localhost:4000/pictures/upload";

  const handleChange = (e) => {
    console.log(e.target.files);
    setImages(e.target.files);
  };

  const submitPicture = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (let i = 0; i < images.length; i++) {
      formData.append("picture", images[i]);
    }

    await axios
      .post(picsUrl, formData)
      .then((res) => {
        setUploadedFiles(res.data.data);
        console.log(res);
        if (res.data === "Wrong filetype") alert("Not a valid image format");
        else {
          alert("File was uploaded");
        }
      })
      .catch((err) => {
        setUploadError(err.message);
        toast.error(`There was an error with picture upload: ${uploadError}`);
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
          multiple
          onChange={handleChange}
          accept="image/png, image/jpeg, image/jpg, image/gif"
        />
        <br />
        <button type="submit">Upload</button>
      </form>
      {uploadedFiles.length > 0 && (
        <ul>
          {uploadedFiles.map((images, index) => (
            <li key={index}>{images.originalname}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ImageUpload;
