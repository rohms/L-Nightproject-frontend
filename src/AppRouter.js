import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import CalendarMain from "./Components/calendar/CalendarMain";
import Contactpage from "./Components/contact/Contactpage";
import Homepage from "./Components/Homepage";
import Merch from "./Components/merch/Merch";
import Navbar from "./Components/navigation/Navbar";
import PeopleMain from "./Components/people/PeopleMain";
import AdminPage from "./Components/admin/AdminPage";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Footer from "./Components/Footer";
import "./Index.css";
import "./Styles/Style.css";
import { GridGallery } from "./Components/gallery/GridGallery";
import NotFound from "./Components/Alerts/NotFound";

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
          <Route path="/gallery" element={<GridGallery />} />
          <Route path="/merchandise" element={<Merch />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/adlog" element={<AdminPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default AppRouter;
