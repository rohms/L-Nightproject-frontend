import GalleryPics from "./Gallerypics";
import { Gallery } from "react-grid-gallery";
import useAuthContext from "../../hooks/useAuthContext";
import ImageUpload from "./ImageUpload";
import { useState, useEffect } from "react";
import FsLightbox from "fslightbox-react";

const GridGallery = () => {
  const { isLogged, user } = useAuthContext();
  const [imageIndex, setImageIndex] = useState(0);
  const [toggler, setToggler] = useState(false);
  const [key, setKey] = useState(false);

  const galleryPicSources = GalleryPics.map((image) => image.src);

  const handleClick = (index, item) => {
    setImageIndex(index);
    setToggler(!toggler);
  };

  const galleryImages = GalleryPics.map((image) => ({
    src: image.src,
    thumbnail: image.src,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: image.title,
  }));

  useEffect(() => {
    setTimeout(() => setKey(key + 1));
  }, []);

  return (
    <>
      <h2>Gallery</h2>
      <div className="Gallerypicscontainer">
        <Gallery images={galleryImages} onClick={handleClick} />
        <FsLightbox
          toggler={toggler}
          sources={galleryPicSources}
          key={key}
          slide={imageIndex + 1}
          type="image"
        />
      </div>
      {isLogged ? <ImageUpload /> : null}
    </>
  );
};

export { GridGallery };