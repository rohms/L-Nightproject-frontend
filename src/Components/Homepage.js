import React from "react";
import lnightdp from "../Images/lnightdp.png";
import neonline from "../Images/neon-line.png";
import celebrate from "../Images/pngwing.png";
import "./Styles/Style.css";
import ConfettiExplosion from "react-confetti-explosion";

const Homepage = () => {
  const [confetti, setConfetti] = React.useState(false);

  return (
    <div className="homepage-container">
      <img className="heropicture" src={lnightdp} alt="L-Night Berlin Group" />
      <img
        src={celebrate}
        className="celebrate"
        alt="celebrating L-Night 10 years"
        onClick={() => setConfetti(true)}
      />
      {confetti && (
        <ConfettiExplosion
          duration={3000}
          force={0.7}
          width={1600}
          particleCount={250}
          onComplete={() => setConfetti(false)}
          colors={[
            "#FF0000",
            "#FF7F00",
            "#FFFF00",
            "#00FF00",
            "#0000FF",
            "#4B0082",
            "#8F00FF",
          ]}
        />
      )}

      <div className="headergroup">
        <h1 className="headergroup__h1">
          Welcome to meet new people in the L-Night
        </h1>
        <span>
          <img className="neonline" src={neonline} alt="neon line" />
        </span>
        <h2 className="headergroup__h2">
          The group for LGBTQIA people/women* in Berlin
        </h2>
      </div>
    </div>
  );
};

export default Homepage;
