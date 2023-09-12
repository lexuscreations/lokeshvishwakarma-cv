import "./index.css";
import React from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { APP_CONFIG } from "./config/";

const root = document.getElementById("root");

if (APP_CONFIG.add_intentionally_CV_adjust_class_on_body_for_testing)
  document.body.classList.add("cv-adjust");

const Render = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.createRoot(root).render(<Render />);
