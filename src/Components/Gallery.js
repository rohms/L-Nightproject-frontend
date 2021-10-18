import React from 'react'
import { ImageList, ImageListItem } from "@mui/material";
import GalleryPics from './Gallerypics';
import "../Components/Styles/Gallery.css"


const Gallery = () => {
    return (
        <div>
            <h2>Gallery</h2>
                <div className="Gallerypicscontainer">
                    <ImageList variant="masonry" cols={4} gap={8}> {GalleryPics.map((item, index) => ( <ImageListItem key={index}> <img src={`${item.imgSrc}?w=248&fit=crop&auto=format`} srcSet={`${item.imgSrc}?w=248&fit=crop&auto=format&dpr=2 2x`} alt={item.title} loading="lazy" />
                    </ImageListItem> ))} </ImageList> 
            </div>
        </div>
    )
}

export default Gallery
