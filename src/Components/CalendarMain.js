import React from 'react';
import "./Styles/Calendar.css";
import ReactCalendar from './ReactCalendar';
import CalendarDetail from './CalendarDetail';


const Calendarmain = () => {
    return (
        <div className="calendarpage">
        <h1>See the upcoming events</h1>
        <h4>- days with events are highlighted in purple -</h4>
        <div className="allcalendar">
                <CalendarDetail />
                <div className="calendarHolder"><ReactCalendar /></div>
        </div>
        </div>
    )
}

export default Calendarmain
