import GalleryPics from "./Gallerypics";
import { Gallery } from "react-grid-gallery";
import { useAuthContext } from "../../hooks/useAuthContext";
import ImageUpload from "./ImageUpload";
import { useState, useRef, useEffect } from "react";
import FsLightbox from "fslightbox-react";
import { Seo } from "../Seo";
import { Loader } from "../Alerts/Loader";

const loadImages = (images) => {
  const promises = images.map((image) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = image.src;
      img.onload = () => {
        image.width = img.width;
        image.height = img.height;
        resolve();
      };
      img.onerror = () => reject();
    });
  });
  return Promise.all(promises);
};

const GridGallery = () => {
  const { isLogged } = useAuthContext();
  const [imageIndex, setImageIndex] = useState(0);
  const [toggler, setToggler] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const firstImageRef = useRef(null);

  const galleryPicSources = GalleryPics.map((image) => image.src);

  const handleClick = (index) => {
    setImageIndex(index);
    setToggler(!toggler);
  };

  const galleryImages = GalleryPics.map((image, index) => {
    // console.log(img);
    const ref = index === 0 ? firstImageRef : null;

    return {
      src: image.src,
      thumbnail: image.src,
      width: image.width,
      height: image.height,
      caption: image.title,
      onLoad: () => {
        if (index === 0) {
          setToggler(true);
        }
      },
      ref,
    };
  });

  useEffect(() => {
    loadImages(GalleryPics)
      .then(() => setImagesLoaded(true))
      .catch((err) => console.log(err));
  }, []);

  if (!imagesLoaded) {
    return <Loader />;
  }

  // console.log("galleryimages array", galleryImages);

  return (
    <>
      <Seo
        title="Gallery"
        description="Gallery of the L-Night Berlin Group with pictures about the L-Night events."
        type="website"
        keywords={["L-Night Berlin", "L-Night Gallery", "L-Night Photos"]}
      />
      <h2>Gallery</h2>
      <div className="Gallerypicscontainer">
        <Gallery images={galleryImages} onClick={handleClick} />
        <FsLightbox
          toggler={toggler}
          sources={galleryPicSources}
          slide={imageIndex + 1}
          type="image"
        />
      </div>
      {isLogged ? <ImageUpload /> : null}
    </>
  );
};

export { GridGallery };
