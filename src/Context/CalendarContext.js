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
    // .get("https://graph.facebook.com/v12.0/322950981168488/events",  { headers: {"accessToken" : "EAAIXfkZA21XcBANl0sUBz6JSEpc9r6pycEZALqTcQtphcH2yUQ8uhcX7fAj3ZC4qy28EFxbeUIwPwHADrv0A21fcOJtWgcKkrht7NvzCZC40YLSnCtLyXbthAWX8JtKfO0ijBZBktGUIHbvYaVPZBLBZCAHYZAei3ltTM1nX2vVeseQOW6LPZB46VKPvLNo9yACyqE5ue5wXjlRFyVtFUbtMH"}, AppID: 588781068932471 })
   
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