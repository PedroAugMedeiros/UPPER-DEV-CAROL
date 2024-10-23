// import React from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";

// const container = document.getElementById("root");
// const root = createRoot(container);

// root.render(<App />);
import Home from "./pages/Home";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/tailwind.css";
import "./styles/index.css";
import "./styles/font.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/hello",
    element: <div>Hello</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
