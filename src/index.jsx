import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import DeepCleaning from "./pages/Deepcleaning";

import App from "./App";

import "./styles/tailwind.css";
import "./styles/index.css";
import "./styles/font.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    path: "/DeepCleaning",
    element: <DeepCleaning />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
