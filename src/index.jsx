// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
import CommercialCleaning from "./pages/CommercialCleaning/index";
import JoinUs from "./pages/JoinUs/index";
import MoveInAndMoveOut from "./pages/MoveInAndMoveOut/index";
import RegularCleaning from "./pages/RegularCleaning/index";
import TermsAndConditions from "./pages/TermsAndConditions/index";
import AboutUs from "./pages/Aboutus/index";
import Contact from "./pages/Contact/index";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/tailwind.css";
import "./styles/index.css";
import "./styles/font.css";
import Home from "./pages/Home";
import DeepCleaning from "./pages/Deepcleaning";
// import Root from "./routes/root";
import App from "./App";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/Home", element: <Home /> },
  { path: "/JoinUs", element: <JoinUs /> },
  { path: "/AboutUs", element: <AboutUs /> },
  { path: "/Contact", element: <Contact /> },

  { path: "/CommercialCleaning", element: <CommercialCleaning /> },
  { path: "/RegularCleaning", element: <RegularCleaning /> },
  { path: "/MoveInAndMoveOut", element: <MoveInAndMoveOut /> },
  { path: "/DeepCleaning", element: <DeepCleaning /> },
  { path: "/TermsAndConditions", element: <TermsAndConditions /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
