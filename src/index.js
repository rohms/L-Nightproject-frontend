import React from "react";
import * as ReactDOM from "react-dom/client";
import "./Components/Styles/Index.css";
import "./Components/Styles/Style.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthController } from "./Context/AuthContext";
import { CalendarController } from "./Context/CalendarContext";
import Toast from "./Components/Alerts/Toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Toast />
      <CalendarController>
        <AuthController>
          <App />
        </AuthController>
      </CalendarController>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
