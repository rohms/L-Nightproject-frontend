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
                

                <div className="calendarHolder"><h3>The L-Night event calendar:</h3><ReactCalendar /></div>
                   
           
        </div>
        </>
    )
}

export default Calendarmain
