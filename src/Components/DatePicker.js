import React, { useState } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import "./Styles/Calendar.css";
import "date-fns";
import startOfWeek from "date-fns/startOfWeek";


const StaticDatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return(

        <div className="calendarcontainer">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker 
                autoOk
                disableToolbar
                variant="static"
                openTo="date"
                minDate="0"
                value={selectedDate}
                onChange={setSelectedDate}
                changeYear="false"
                startOfWeek="5"
                
                
            />
        </MuiPickersUtilsProvider>
        </div>
    );
};

export default StaticDatePicker;

// import DateAdapter from "@mui/lab/AdapterDateFns";
// import StaticDatePicker from "@material-ui/pickers";



/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker displayStaticWrapperAs="desktop" openTo="month" value={value} onChange={(newValue) => { setValue(newValue); }} renderInput={(params) => <TextField {...params} />} />
                </LocalizationProvider>  */