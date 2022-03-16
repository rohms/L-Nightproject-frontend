import React, { useContext } from "react";
import "./Styles/Calendar.css";
import { CalendarContext } from "../Context/CalendarContext";
import unicorn from "../Images/unicorn3.png";

const CalendarDetail = (props) => {
  const { events, date } = useContext(CalendarContext);
  const currentEvent = events.filter(
    (event) => new Date(event.start_time).toDateString() === date.toDateString()
  );
  console.log(currentEvent);
  return (
    <div className="calendardetailbox">
      {currentEvent.length > 0 ? (
        currentEvent.map((event) => {
          return (
            <div>
              <p>
                <b>{event.eventname}</b>
              </p>
              <h4>Location:</h4>
              <p>{event.location}</p>
              <h4>Where:</h4>
              <p>{event.address}</p>
              <h4>What we do:</h4>
              <p>{event.description}</p>
              <p>
                <b>
                  For exact time and more info please join the FB or Meetup
                  groups.
                </b>
              </p>
            </div>
          );
        })
      ) : (
        <div>
          <div className="unicorn">
            <img src={unicorn} alt="Unicorn" />
          </div>
          <p>Unicorns are sleeping today..zzz..</p>
        </div>
      )}
    </div>
  );
};

export default CalendarDetail;
