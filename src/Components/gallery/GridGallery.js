import GalleryPics from "./Gallerypics";
import { Gallery } from "react-grid-gallery";
import useAuthContext from "../../hooks/useAuthContext";
import ImageUpload from "./ImageUpload";
import { useState, useEffect } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const GridGallery = () => {
  const { isLogged, user } = useAuthContext();
  const [index, setIndex] = useState(-1);
  const [key, setKey] = useState(false);

  const currentImage = GalleryPics[index];
  const nextIndex = (index + 1) % GalleryPics.length;
  const nextImage = GalleryPics[nextIndex] || currentImage;
  const prevIndex = (index + GalleryPics.length - 1) % GalleryPics.length;
  const prevImage = GalleryPics[prevIndex] || currentImage;

  const handleClick = (index, item) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  useEffect(() => {
    setTimeout(() => setKey(key + 1));
    const img = new Image();
    img.src = GalleryPics[0].src;
  }, [setKey, key]);

  return (
    <>
      <h2>Gallery</h2>
      <div className="Gallerypicscontainer">
        <Gallery images={GalleryPics} onClick={handleClick} />
        {!!currentImage && (
          <Lightbox
            mainSrc={currentImage.src}
            imageTitle={currentImage.title}
            mainSrcThumbnail={currentImage.src}
            nextSrc={nextImage.src}
            nextSrcThumbnail={nextImage.src}
            prevSrc={prevImage.src}
            prevSrcThumbnail={prevImage.src}
            onCloseRequest={handleClose}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
          />
        )}
      </div>
      {isLogged ? <ImageUpload /> : null}
    </>
  );
};

export { GridGallery };
