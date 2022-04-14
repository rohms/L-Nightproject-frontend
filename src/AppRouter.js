import React from "react";
import { Route, Routes } from "react-router-dom";
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
import "./Components/Styles/Index.css";
import "./Components/Styles/Style.css";

const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Routes>
          <Route exact={true} path="/" element={<Homepage />} />
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
