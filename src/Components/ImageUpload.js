import React, { useState, useEffect } from 'react'
import "./Styles/Gallery.css"
import axios from "axios"
import Message from './Alerts/Message'

const ImageUpload = () => {
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [image, setImage] = useState("");

    // const PicURL = process.env.REACT_APP_PICTURES_URL
       const PicURL = "http://localhost:4000/pictures/upload"


    const handleChange = (e) => {
        setImage({ picture: e.target.files[0]})
        console.log(e.target.files[0])
        
    }

    const submitPicture = async (e) => {
        e.preventDefault();

            const formData = new FormData();
            formData.append("picture", image.picture)
            await axios.post(PicURL, formData, {
       
            }).then(res => {
                console.log(res)
                alert("File was uploaded")
            })
            if (error) {
            throw error;
        }   else setError("");
                    
    
            // console.log(image)
            //  if(!image){
            //     alert("Please add a file.");
            //     return;
            // await handleChange(formData)
            //     .then(response => setImage )
    }   

    return (
        <div className="imageUpload">
            <h2>Upload Image</h2>
            <form onSubmit={submitPicture}  encType="multipart/form-data">
                <input type="file" name="picture" onChange={handleChange} accept="image/png, image/jpeg, image/jpg, image/gif" /><br/>
                <button type="submit">Upload</button>

            </form>
            {/* accept="image/png, image/jpeg, image/jpg, image/gif" */}
        </div>
    )
  }

export default ImageUpload;
