import React from "react";
import { Avatars } from "./Hosts";

const PeopleHosts = () => {
  return (
    <div>
      <div className="peopletextcontainer">
        <p>
          The L-Night is run by several hosts so it's a team effort. In the
          beginning of the group it was led only by 2-3 people, it was hard work
          but they still hosted almost every Tuesday! Now we have around 8
          different people who are hosting the L-Night meetings on Tuesdays and
          some other L-Night events.
        </p>
        <p>
          We take care that the people find the place and we bring rainbow flags
          or L-Night signs with us so it's easy to find us even if you would be
          joining for the first time.
        </p>
        <p>
          If you are part of the L-Night, living in Berlin and wanting to host
          some time the L-Night events please get in touch with us via the
          L-Night group. Then you can pick your favorite place to host and let
          us know the detailed event info. Please keep in mind that usually
          there are around 15-20 people coming so the place you want to host
          should have enough place for everybody.
        </p>
      </div>

      <h3>Here are some of the hosts:</h3>
      <Avatars />
    </div>
  );
};

export default PeopleHosts;
