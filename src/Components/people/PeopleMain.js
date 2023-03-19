import React from "react";
import PeopleHosts from "./PeopleHosts.js";
import "../Styles/Style.css";

const PeopleMain = () => {
  return (
    <div className="peoplemaincontainer">
      <h2>The people behind the L-Night</h2>
      <PeopleHosts />
    </div>
  );
};

export default PeopleMain;
