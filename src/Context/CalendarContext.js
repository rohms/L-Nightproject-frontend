import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const CalendarContext = createContext();
const eventsAPI = process.env.REACT_APP_EVENTS;

export const CalendarController = (props) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(new Date());

  const getEvents = async () => {
    setLoading(true);
    try {
      const response = await axios.get(eventsAPI);
      setEvents(response.data);
      console.log('my events from fetching', response.data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }

  };

  useEffect(() => {
    getEvents();
  }, []);

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
