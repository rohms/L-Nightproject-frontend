import axios from "axios";
import { createContext, useState, useEffect } from "react";


export const CalendarContext = createContext();

export const CalendarController = (props) => {
 const [events, setEvents] = useState([]);
 const [loading, setLoading]= useState(false);



useEffect(() => {
    getEvents();
}, []);

const getEvents = async () => {
    await axios
    .get("https://graph.facebook.com/v12.0/322950981168488/events",  { headers: {"accessToken" : "EAAIXfkZA21XcBANl0sUBz6JSEpc9r6pycEZALqTcQtphcH2yUQ8uhcX7fAj3ZC4qy28EFxbeUIwPwHADrv0A21fcOJtWgcKkrht7NvzCZC40YLSnCtLyXbthAWX8JtKfO0ijBZBktGUIHbvYaVPZBLBZCAHYZAei3ltTM1nX2vVeseQOW6LPZB46VKPvLNo9yACyqE5ue5wXjlRFyVtFUbtMH"}, AppID: 588781068932471 })
   
    .then((response) => console.log(response));
    setLoading(true);
}
 
const value = {
    events,
 setEvents,
 loading,
 setLoading
}

    return(
        <CalendarContext.Provider value={value}>
            {props.children}
        </CalendarContext.Provider>
    );
};