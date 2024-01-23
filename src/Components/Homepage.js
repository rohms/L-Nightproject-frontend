import lnightdp from "../Images/lnightdp.png";
import neonline from "../Images/neon-line.png";
import { Seo } from "./Seo";

const Homepage = () => {

  return (
    <>
      <Seo
        title="L-Night Berlin Homepage"
        description="L-Night Berlin is a group for LGBTQIA+ people/women in Berlin. Our mission is to provide a welcoming and inclusive community for LGBTQIA people/women. We have meetings on Tuesdays. Join us today and discover the power of community!"
        type="website"
        keywords={["L-Night", "L-Night Berlin", "L-Night Homepage"]}
      />
      <div className="homepage-container">
        <img
          className="heropicture"
          src={lnightdp}
          alt="L-Night Berlin Group"
        />

        <div className="headergroup">
          <h1 className="headergroup__h1 gradient">
            Meet new people in L-Night
          </h1>
          <span>
            <img className="neonline" src={neonline} alt="neon line" />
          </span>
          <h2 className="headergroup__h2">
            The group for LGBTQIA people/women* in Berlin
          </h2>
        </div>
      </div>
    </>
  );
};

export default Homepage;
