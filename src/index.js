import React from "react";
import * as ReactDOM from "react-dom/client";
import "./Index.css";
import "./Styles/Style.css"
import "./Components/helpers/helper.css"
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import AuthController from "./Context/AuthContext";
import { CalendarController } from "./Context/CalendarContext";
import Toast from "./Components/Alerts/Toast";
import { HelmetProvider } from "react-helmet-async";

const helmetContext = {};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
        <Toast />
        <CalendarController>
          <AuthController>
            <App />
          </AuthController>
        </CalendarController>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
