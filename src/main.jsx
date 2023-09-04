import "./index.css";
import React from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";

const root = document.getElementById("root");

const Render = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.createRoot(root).render(<Render />);
