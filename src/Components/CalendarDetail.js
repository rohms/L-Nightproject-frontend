import React, {useContext} from 'react'
import "./Styles/Calendar.css"
import { CalendarContext } from '../Context/CalendarContext'
import Calendar from "react-calendar";

const CalendarDetail = (props) => {
    const {events, loading, date } = useContext(CalendarContext);
    const currentEvent = events.filter(event => new Date(event.start_time).toDateString() === date.toDateString())
    




    return (
        <div className="calendardetailbox">
            {currentEvent.map(event=>{return(
                <div>
                <p><b>{event.eventname}</b></p>
                <h4>Location:</h4>
                <p>{event.location}</p>
                <h4>Where:</h4>
                <p>{event.address}</p>
                <h4>What we do:</h4>
                <p>{event.description}</p>
                </div>
            )})}
        </div>
    )
}

export default CalendarDetail
