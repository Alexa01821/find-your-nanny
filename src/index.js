import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "modern-normalize";
import "./index.css";
import App from "./components/App";
import { auth } from "api";

console.log(auth);
auth.languageCode = "it";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="nanny-services">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
