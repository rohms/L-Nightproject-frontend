import React, { useState } from 'react';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CalendarContext } from '../Context/CalendarContext';



const ReactCalendar = () => {
    const [date, setDate] = useState(new Date());
    // const [events] = useContext(CalendarContext)
    const onChange = (date) => {
        setDate(date)
    }

    console.log(CalendarContext)

    const onClickDay = (date, event) => alert("You clicked on date", date)
console.log(date);
    return (
        <div>
            <Calendar
            onChange={onChange}
            value={date}
            defaultView="month"
            onClickDay={onClickDay}

            />
        </div>
    );
}

export default ReactCalendar
