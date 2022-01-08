import React from "react";
import ReactDOM from "react-dom";
import "./Components/Styles/Index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthController } from "./Context/AuthContext";
import { CalendarController } from "./Context/CalendarContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CalendarController>
        <AuthController>
          <App />
        </AuthController>
      </CalendarController>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
