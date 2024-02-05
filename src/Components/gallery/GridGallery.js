import { Gallery } from "react-grid-gallery";
import { useAuthContext } from "../../hooks/useAuthContext";
import ImageUpload from "./ImageUpload";
import { useState, useRef } from "react";
import FsLightbox from "fslightbox-react";
import { Seo } from "../Seo";
import { Loader } from "../Alerts/Loader";
import { useQuery } from "../../hooks/useQuery";

const PICTURE_URL = process.env.REACT_APP_PICTURES_GET_ALL;

const GridGallery = () => {
  const { isLogged } = useAuthContext();
  const [imageIndex, setImageIndex] = useState(0);
  const firstImageRef = useRef(null);
  const [toggler, setToggler] = useState(false);
  const [refetch, setRefetch] = useState(0);

  const { data: imageURLS, error: fetchError, loading: imagesLoading } = useQuery(PICTURE_URL, refetch);

  const preparedImages = imageURLS?.map((url, index) => {
    const ref = index === 0 ? firstImageRef : null;
    return {
      src: url,
      onLoad: () => {
        if (index === 0) {
          setToggler(true);
        }
      },
      ref,
    };
  });

  if (imagesLoading) return <Loader />;

  if (fetchError)
    return <div>There was an error while fetching the pictures: {fetchError.message}</div>;

  const handleClick = (index) => {
    setImageIndex(index);
    setToggler(!toggler);
  };

  const handleRefetch = () => {
    setRefetch((prev) => prev + 1);
  }

  return (
    <>
      <Seo
        title="Gallery"
        description="Gallery of the L-Night Berlin Group with pictures about the L-Night events."
        type="website"
        keywords={["L-Night Berlin", "L-Night Gallery", "L-Night Photos"]}
      />
      <h1 className="no-margin-padding gradient">Gallery</h1>
      <div className="Gallerypicscontainer">
        <Gallery
          data-cy="react-grid-gallery"
          images={preparedImages}
          onClick={handleClick}
        />

        {imageURLS ? <FsLightbox
          data-cy="fs-lightbox"
          toggler={toggler}
          sources={imageURLS}
          slide={imageIndex + 1}
          type="image"
        /> : <p>There are no pictures yet, sorry!</p>}
      </div>
      {isLogged ? <ImageUpload onRefetch={handleRefetch} /> : null}
    </>
  );
};

export { GridGallery };