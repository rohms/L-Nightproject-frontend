import React, { useEffect, useState } from "react";
import "../Styles/Gallery.css";
import axios from "axios";
import "../Styles/Style.css";
import { toast } from "react-toastify";
import { ProgressBar } from "../Alerts/ProgressBar";

const PicsURL = process.env.REACT_APP_PICTURES_URL;

const ImageUpload = () => {
  const [images, setImages] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadError, setUploadError] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    setImages(e.target.files);
  };

  const uploadFiles = async (e) => {
    e.preventDefault();
    if (images.length === 0) {
      toast.error("Please select at least one image to upload.")
      return;
    }

    setUploadProgress(0)
    setSubmitting(true)

    const formData = new FormData();
    let imageArray = Array.from(images);
    for (let i = 0; i < imageArray.length; i++) {
      formData.append("picture", imageArray[i]);
    }

    await axios
      .post(PicsURL, formData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(progress);
        },
      })
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
      })
      .finally(() => {
        setSubmitting(false)
        setUploadProgress(0)
      })
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
        <button type="submit" disabled={submitting}>Upload</button>
      </form>
      {uploadProgress > 0 && <ProgressBar progress={uploadProgress} />}
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
