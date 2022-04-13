import React from "react";
import lnightb from "../Images/lnightber3.jpg";
import lnightglow from "../Images/Lnightglow.png";
import lnightdp from "../Images/lnightdp.png";
import neonline from "../Images/neon-line.png";
import "./Styles/Style.css";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <img
        className="heropicture"
        src={lnightdp}
        alt="L-Night Berlin Group"
      ></img>

      <div className="headergroup">
        <h1 className="headergroup__h1">
          Welcome to meet new people in the L-Night
        </h1>
        <span>
          <img className="neonline" src={neonline} alt="neon line" />
        </span>
        <h2 className="headergroup__h2">
          The group for queer and lesbian women in Berlin
        </h2>
      </div>
    </div>
  );
};

export default Homepage;
