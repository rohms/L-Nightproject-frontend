import React, { useState } from "react";
import "../Styles/Gallery.css";
import axios from "axios";
import "../Styles/Style.css";
import { toast } from "react-toastify";

const ImageUpload = () => {
  const [images, setImages] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadError, setUploadError] = useState("");

  const PicsURL = process.env.REACT_APP_PICTURES_URL;

  const handleChange = (e) => {
    console.log(e.target.files);
    setImages(e.target.files);
  };

  const uploadFiles = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    console.log("imageArray", images);
    let imageArray = [];
    imageArray = Array.from(images);
    for (let i = 0; i < imageArray.length; i++) {
      formData.append("picture", imageArray[i]);
    }

    await axios
      .post(PicsURL, formData)
      .then((res) => {
        setUploadedFiles(res.data.data);
        console.log(res);
        if (res.data === "Wrong filetype")
          toast.error("Not a valid image format");
        else {
          toast.success("Files were uploaded");
        }
      })
      .catch((err) => {
        setUploadError(err.message);
        toast.error(`There was an error with picture upload: ${uploadError}`);
      });
  };

  return (
    <div className="imageUpload">
      <h2>Upload Image</h2>
      <form onSubmit={uploadFiles} encType="multipart/form-data">
        <input
          type="file"
          name="picture"
          multiple
          onChange={handleChange}
          accept="image/png, image/jpeg, image/jpg, image/gif"
          required
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
