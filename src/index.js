import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Apps from "./Apps";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Apps />
  </React.StrictMode>
);

reportWebVitals();
