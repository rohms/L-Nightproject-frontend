import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
       <span className="progress-bar__label">{progress}%</span> 
      </div>
    </div>
  );
};

export { ProgressBar };