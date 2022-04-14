import React from "react";
import ReactCalendar from "./ReactCalendar";
import CalendarDetail from "./CalendarDetail";
import "./Styles/Style.css";

const Calendarmain = () => {
  return (
    <div className="calendarpage">
      <h2>See the upcoming events</h2>
      <h4>🦄 events are highlighted in purple 🦄</h4>
      <div className="allcalendar">
        <CalendarDetail />
        <div className="calendarHolder">
          <ReactCalendar />
        </div>
      </div>
    </div>
  );
};

export default Calendarmain;
