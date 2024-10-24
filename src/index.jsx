import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/tailwind.css";
import "./styles/index.css";
import "./styles/font.css";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
