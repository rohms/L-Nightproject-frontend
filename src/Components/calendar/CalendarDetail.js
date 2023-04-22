import React, { useContext } from "react";
import { CalendarContext } from "../../Context/CalendarContext";
import unicorn from "../../Images/unicorn3even.png";
import "../Styles/Style.css";
// import { getGoogleCalendarEvents } from "./GoogleCalendar";

const CalendarDetail = (props) => {
  const { events, date } = useContext(CalendarContext);
  const currentEvent = events.filter(
    (event) => new Date(event.start_time).toDateString() === date.toDateString()
  );

  // console.log(currentEvent);
  // console.log(events);
  // getGoogleCalendarEvents();
  return (
    <div className="calendar-detailbox">
      {currentEvent.length > 0 ? (
        currentEvent.map((event) => {
          return (
            <div className="calendar--eventinfo" key={event._id}>
              <b>
                <h3>{event.eventname}</h3>
              </b>

              <div className="calendar-eventinfo__details">
                <h4>Location:</h4>
                <p>{event.location}</p>
                <h4>What we do:</h4>
                <p>{event.description}</p>
                <p className="eventinfo-diclaimer">
                  <b>
                    For more info please join the FB or Meetup groups. <br />{" "}
                    See the links in the footer. ⬇
                  </b>
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <div className="allcalendar">
          <div className="unicorn">
            <img src={unicorn} alt="Unicorn" />
            <p>Unicorns are sleeping today..zzz..</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarDetail;
