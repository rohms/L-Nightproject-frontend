import GalleryPics from "./Gallerypics";
import { Gallery } from "react-grid-gallery";
import { useAuthContext } from "../../hooks/useAuthContext";
import ImageUpload from "./ImageUpload";
import { useState, useRef } from "react";
import FsLightbox from "fslightbox-react";
import { Seo } from "../Seo";
// will be used later when images are coming from CloudFront via S3 bucket and backend
// import { Loader } from "../Alerts/Loader";

const GridGallery = () => {
  const { isLogged } = useAuthContext();
  const [imageIndex, setImageIndex] = useState(0);
  const [toggler, setToggler] = useState(false);
  // const [loading, setLoading] = useState(true);
  const firstImageRef = useRef(null);

  const galleryPicSources = GalleryPics.map((image) => image.src);

  const handleClick = (index) => {
    setImageIndex(index);
    setToggler(!toggler);
  };

  const galleryImages = GalleryPics.map((image, index) => ({
    src: image.src,
    thumbnail: image.src,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: image.title,
    onLoad: index === 0 ? () => setToggler(true) : undefined,
    ref: index === 0 ? firstImageRef : undefined,
  }));

  // if (loading) {
  //   return <Loader />;
  // }

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
