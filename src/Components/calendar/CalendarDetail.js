import React, { useContext } from "react";
import { CalendarContext } from "../../Context/CalendarContext";
import unicorn from "../../Images/unicorn3even.png";
// import { getGoogleCalendarEvents } from "./GoogleCalendar";

const CalendarDetail = () => {
  const { events, date } = useContext(CalendarContext);

  if (!events) {
    return <p>Issue, there are no events!</p>;
  }

  const eventsArray = Object.values(events);

  const currentEvents = eventsArray.filter(
    (event) => new Date(event.start_time).toDateString() === date.toDateString()
  );


  return (
    <div className="calendar-detailbox">
      {currentEvents.length > 0 ? (
        currentEvents.map((event) => {
          return (
            <div className="calendar--eventinfo" key={event._id}>
              <b>
                <h3 data-cy="eventName">{event.eventname}</h3>
              </b>

              <div className="calendar-eventinfo__details">
                <h4>Location:</h4>
                <p data-cy="eventLocation">{event.location}</p>
                <h4>What we do:</h4>
                <p data-cy="eventDescription">{event.description}</p>
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
          <div data-cy="unicorn" className="unicorn">
            <img src={unicorn} alt="Unicorn" />
            <p>Unicorns are sleeping today..zzz..</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarDetail;
