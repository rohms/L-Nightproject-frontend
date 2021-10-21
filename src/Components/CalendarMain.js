import React, { useState } from 'react';
import "./Styles/Calendar.css";
import axios from "axios";
import ReactCalendar from './ReactCalendar';
import CalendarDetail from './CalendarDetail';


const Calendarmain = () => {

    
    return (
        <>
        <h1>See the upcoming events</h1>
        <div className="allcalendar">
        
           
            
                <div className="calendardetailbox"><CalendarDetail /></div>
                

                <div className="calendarHolder"><p>I am the calendar holder</p><ReactCalendar /></div>
                   
           
        </div>
        </>
    )
}

export default Calendarmain
