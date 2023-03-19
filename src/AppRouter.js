import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import CalendarMain from "./Components/calendar/CalendarMain";
import Contactpage from "./Components/contact/Contactpage";
import Gallery from "./Components/gallery/Gallery";
import Homepage from "./Components/Homepage";
import Merch from "./Components/merch/Merch";
import Navbar from "./Components/Navbar";
import PeopleMain from "./Components/people/PeopleMain";
import AdminPage from "./Components/admin/AdminPage";
import Footer from "./Components/Footer";
import "./Components/Styles/Index.css";
import "./Components/Styles/Style.css";

const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/people" element={<PeopleMain />} />
          <Route path="/calendar" element={<CalendarMain />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/merchandise" element={<Merch />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/adlog" element={<AdminPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default AppRouter;
