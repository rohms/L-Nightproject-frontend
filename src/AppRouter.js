import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import CalendarMain from "./Components/CalendarMain";
import Contactpage from "./Components/Contactpage";
import Gallery from "./Components/Gallery";
import Homepage from "./Components/Homepage";
import Merch from "./Components/Merch";
import Navbar from "./Components/Navbar";
import PeopleMain from "./Components/PeopleMain";
import AdminPage from "./Components/AdminPage";
import Footer from "./Components/Footer";
import "./Components/Styles/App.css";
import "./Components/Styles/Index.css";

const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Routes>
          <Route exact={true} path="/" element={<Homepage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/people" element={<PeopleMain />} />
          <Route exact path="/calendar" element={<CalendarMain />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/merchandise" element={<Merch />} />
          <Route exact path="/contact" element={<Contactpage />} />
          <Route exact path="/adlog" element={<AdminPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default AppRouter;
