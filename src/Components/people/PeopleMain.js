import React from "react";
import PeopleHosts from "./PeopleHosts.js";
import { Seo } from "../Seo.js";
import Gradient from "rgt"

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
        <h1 className="no-margin-padding"><Gradient dir="left-to-right" from="#e30cad" to="#ff8000">The people behind L-Night</Gradient></h1>
        <PeopleHosts />
      </div>
    </>
  );
};

export default PeopleMain;
