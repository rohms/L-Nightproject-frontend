import React from "react";
import ReactCalendar from "./ReactCalendar";
import CalendarDetail from "./CalendarDetail";
import { Seo } from "../Seo.js";

const Calendarmain = () => {
  return (
    <>
      <Seo
        title="L-Night Calendar"
        description="L-Night Calendar Page with information about the upcoming events."
        type="website"
        keywords={["L-Night Berlin", "L-Night Calendar", "L-Night Events"]}
      />
      <div className="calendarpage">
        <h1 className="no-margin-padding gradient">See the upcoming events</h1>
        <h4>🦄 events are highlighted in purple 🦄</h4>
        <div className="allcalendar">
          <CalendarDetail />
          <div className="calendarHolder">
            <ReactCalendar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendarmain;
