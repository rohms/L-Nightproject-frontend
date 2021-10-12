import React, { useState } from 'react';
import "./Styles/Calendar.css";
import axios from "axios";
import StaticDatePicker from './DatePicker';



const Calendarmain = () => {
    return (
        <div>
            <h1>See the upcoming events from our event calendar</h1>
            <div className="calendardetailbox">Event detail box</div>

            <div className="calendarHolder">
            <StaticDatePicker />

            </div>
        </div>
    )
}

export default Calendarmain
