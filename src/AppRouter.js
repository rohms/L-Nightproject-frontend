import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Components/About";
import CalendarMain from "./Components/CalendarMain";
import Contactpage from "./Components/Contactpage"
import Gallery from "./Components/Gallery";
import Homepage from "./Components/Homepage";
import Merch from "./Components/Merch";
import Navbar from "./Components/Navbar";
import PeopleMain from "./Components/PeopleMain";




const AppRouter = () => {
    return (
        <Router>
        <Navbar />
        <div className="appcontainer">
            <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/people" component={PeopleMain}/>
            <Route exact path="/calendar" component={CalendarMain} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/merchandise" component={Merch} />
            <Route exact path="/contact" component={Contactpage}/>
            </Switch>
        </div>
        </Router>
    );
};

export default AppRouter;
