import React from "react";
import PeopleHosts from "./PeopleHosts.js";
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
        <h1 className="no-margin-padding gradient">The people behind L-Night</h1>
        <PeopleHosts />
      </div>
    </>
  );
};

export default PeopleMain;
