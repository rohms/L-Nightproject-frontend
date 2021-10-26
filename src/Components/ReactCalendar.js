import React, { useState, useContext } from 'react';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CalendarContext } from '../Context/CalendarContext';
import { format, nextDay, parseISO } from "date-fns";
import './Styles/Calendar.css'


const ReactCalendar = () => {
    const {events, loading, date, setDate} = useContext(CalendarContext);


    const onChange = (date) => {
        setDate(date)
    }
   
    function tileClassName({date, view}) {
        if(events.find(x=>(new Date(x.start_time).toDateString())===new Date(date).toDateString())) 
        return 'highlight'
    }

    const onClickDay = (date, event) => setDate(date)

    return (
        <div>
            <Calendar
            onChange={onChange}
            value={date}
            defaultView="month"
            onClickDay={onClickDay}
            minDate={new Date()}
            tileClassName={tileClassName}
            />
        </div>
    );
}

export default ReactCalendar
