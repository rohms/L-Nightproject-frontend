import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  return (
    <div className="loader-container">
      <CircularProgress color="secondary" size={100} thickness={10} />
    </div>
  );
};

export { Loader };
