import React from "react";
// import "../Components/Styles/Style.css";
import { Card } from "../Components/Card";
import signature from "../Images/lnight-signature.png";
import { Seo } from "./Seo";

const About = () => {
  return (
    <>
      <Seo
        title="About L-Night Berlin"
        description="L-Night Berlin About Page which includes information about the group and its events."
        type="info"
        keywords={[
          "L-Night",
          "L-Night Berlin",
          "L-Night About",
          "L-Night Events",
        ]}
      />
      <div className="aboutmaincontainer">
        <div className="textcontainer">
          <div>
            <h1 className="what-header no-margin-padding gradient">What is the L-Night group?</h1>
          </div>
          <p>
            <b>The L-Night Berlin</b> group was founded in <b>April 2013.</b>{" "}
            The original organizers have changed but the group is going strong.
            We could safely say that the L-Night is one of the most regular
            meetings for English speaking queer and lesbian women / LGBTQIA* in
            Berlin. Queer visibility is important and that is also why this
            group is so precious in many ways. L-Night has been bringing people
            together for a decade!
          </p>
          <span>🦄🦄🦄🦄🦄</span>
          <p>
            L-night Berlin group is a friendly, (mainly) English-language social
            group for queer women and non-binary individuals who feel they have
            a connection to the women's community. We particularly welcome women
            who are marginalised within the LGBTQIA+ community, such as trans
            women, women of colour, older women, disabled women and other
            similar groups.
          </p>
          <div className="card-grid">
            <Card>
              <h3>When do we meet?</h3>
              <p>
                We meet mostly every <b>Tuesday around 7-8pm</b> and
                occasionally on weekends for special events/clubs. We have had
                also our first official L-Night party event and have bigger
                plans ahead!
              </p>
            </Card>
            <Card>
              <h3>What kind of events do we have?</h3>
              <p>
                Venues change week to week as we explore queer and alternative
                spaces stretching from Prenzlauer Berg to Neukölln and beyond.
                Past events include park outings, BBQs, club nights, Christmas
                markets and many other events. We have many favourite bars but
                new suggestions are always welcome.
              </p>
            </Card>
          </div>
          <span>🦄🦄🦄🦄🦄</span>
          <p>
            L-night has expanded steadily since its creation in April 2013. We
            have around 3,000 members in Facebook and Meetup. Our weekly
            meetings are always on (virtually when needed) and always growing
            with new members and venue locations. If you're looking to expand
            your circle of friends or enjoy a drink or trip to the park with
            like-minded people, join us on Tuesday!
          </p>
          <div className="signature">
            <b>With warm regards,</b>
            <img src={signature} alt="signature of L-Night Admin Team" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
