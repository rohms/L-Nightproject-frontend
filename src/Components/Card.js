import React from "react";
import { PropTypes } from "prop-types";

const Card = ({ children }) => {
  return (
    <div className="card">
      {/* <div className="card-image">
        <img src={img} alt={alt} />
      </div>
      <div className="card-text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div> */}
      {children}
    </div>
  );
};

Card.propTypes = {
  //   card: PropTypes.shape({
  //     img: PropTypes.string,
  //     alt: PropTypes.string,
  //     title: PropTypes.string,
  //     text: PropTypes.string,
  //   }),
  children: PropTypes.node.isRequired,
};

export { Card };
