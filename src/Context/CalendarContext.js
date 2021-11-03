import axios from "axios";
import { createContext, useState, useEffect } from "react";


export const CalendarContext = createContext();

export const CalendarController = (props) => {
 const [events, setEvents] = useState([]);
 const [loading, setLoading]= useState(false);
 const [date, setDate] = useState(new Date());


useEffect(() => {
    getEvents();
}, []);

const getEvents = async () => {
    await axios
        .get("https://l-night-app.herokuapp.com/events")
    // .get("https://graph.facebook.com/v12.0/322950981168488/events",  { headers: {"accessToken" : ""}, AppID: })
   
    .then((response) => setEvents(response.data));
    setLoading(true);
}
 
const value = {
    events,
    setEvents,
    loading,
    setLoading,
    date, setDate
}

    return(
        <CalendarContext.Provider value={value}>
            {props.children}
        </CalendarContext.Provider>
    );
};