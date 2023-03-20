import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const CalendarContext = createContext();
const eventsAPI = process.env.REACT_APP_EVENTS;

export const CalendarController = (props) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    await axios
      .get(eventsAPI)
      .catch((error) => console.log(error.message))
      .then((response) => setEvents(response.data));

    setLoading(true);
  };

  const value = {
    events,
    setEvents,
    loading,
    setLoading,
    date,
    setDate,
  };

  return (
    <CalendarContext.Provider value={value}>
      {props.children}
    </CalendarContext.Provider>
  );
};
