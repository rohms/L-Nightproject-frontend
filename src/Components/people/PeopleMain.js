import React from "react";
import PeopleHosts from "./PeopleHosts.js";
import "../Styles/Style.css";
import { Seo } from "../Seo.js";

const PeopleMain = () => {
  return (
    <>
      <Seo
        title="L-Night People"
        description="L-Night Hosts Page with information about the people behind the L-Night."
        type="website"
        keywords={["L-Night Berlin", "L-Night People", "L-Night Hosts"]}
      />
      <div className="peoplemaincontainer">
        <h2>The people behind the L-Night</h2>
        <PeopleHosts />
      </div>
    </>
  );
};

export default PeopleMain;
