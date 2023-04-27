import React from "react";
import * as ReactDOM from "react-dom/client";
import "./Components/Styles/Index.css";
import "./Components/Styles/Style.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthController } from "./Context/AuthContext";
import { CalendarController } from "./Context/CalendarContext";
import Toast from "./Components/Alerts/Toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Toast />
      <CalendarController>
        <AuthController>
          <App />
        </AuthController>
      </CalendarController>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
