import React, { useState } from 'react';
import "./Styles/Calendar.css";
import axios from "axios";
import ReactCalendar from './ReactCalendar';
import CalendarDetail from './CalendarDetail';




const Calendarmain = () => {

    
    return (
        <div className="calendarcontainer">
            <h1>See the upcoming events from our event calendar</h1>
            
            <div className="calendardetailbox"><CalendarDetail /></div>

            <div className="calendarHolder">
            

            </div>
            <div>
                <ReactCalendar />
            </div>
        </div>
    )
}

export default Calendarmain
