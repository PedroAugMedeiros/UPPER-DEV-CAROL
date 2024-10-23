import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/Aboutus";
import Home from "./pages/Home/index";
import DeepCleaning from "./pages/Deepcleaning/index";
import "./styles/tailwind.css";
import "./styles/index.css";
import "./styles/font.css";

function App() {
  return (
    <div>
      <Routes>
        {/* If the current URL is /about, this route is rendered
        while the rest are ignored */}
        {/* <Route path="/about">
          <AboutUs />
        </Route> */}
        <Route exact path="/AboutUs" element={<AboutUs />} />

        {/* Note how these two routes are ordered. The more specific
        path="/contact/:id" comes before path="/contact" so that
        route will render when viewing an individual contact */}

        <Route exact path="/" element={<Home />} />

        {/* If none of the previous routes render anything,
        this route acts as a fallback.

        Important: A route with path="/" will *always* match
        the URL because all URLs begin with a /. So that's
        why we put this one last of all */}
        {/* <Route path="/">
          <Home />
        </Route> */}
      </Routes>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
