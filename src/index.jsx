// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./styles/index.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/tailwind.css";
import "./styles/index.css";
import "./styles/font.css";
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
import Home from "./pages/Home";
import DeepCleaning from "./pages/Deepcleaning";
// import Root from "./routes/root";
import App from "./App";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/deepcleaning", element: <DeepCleaning /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
