import React from "react";
import { Routes, Route } from "react-router-dom";
import { useRoutes } from "react-router-dom";
// import NotFound from "pages/NotFound";
import Home from "./pages/Home";
import AboutUs from "./pages/Aboutus/index";
import DeepCleaning from "./pages/Deepcleaning";
import CommercialCleaning from "./pages/CommercialCleaning/index";
import JoinUs from "./pages/JoinUs/index";
import MoveInAndMoveOut from "./pages/MoveInAndMoveOut/index";
import TermsAndConditions from "./pages/TermsAndConditions/index";

import RegularCleaning from "./pages/RegularCleaning/index";
import AboutusPage from "./pages/Home";

// const ProjectRoutes = () => {
//   let element = useRoutes([
//     { path: "/", element: <Home /> },
//     { path: "/AboutUs", element: <AboutusPage /> },
//     { path: "/DeepCleaning", element: <DeepCleaning /> },
//     { path: "/CommercialCleaning", element: <CommercialCleaning /> },
//     { path: "/JoinUs", element: <JoinUs /> },
//     { path: "/MoveInAndMoveOut", element: <MoveInAndMoveOut /> },
//     { path: "/RegularCleaning", element: <RegularCleaning /> },
//     { path: "/TermsAndConditions", element: <TermsAndConditions /> },
//     { path: "*", element: <NotFound /> },
//     {
//       path: "home",
//       element: <Home />,
//     },
//     {
//       path: "AboutUs",
//       element: <Home />,
//     },
//   ]);

//   return element;
// };
function App() {
  return (
    <div className="root">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/DeepCleaning" element={<DeepCleaning />}></Route>
        {/* <Route path="/DeepCleaning" element={<DeepCleaning />}></Route>
        <Route path="/DeepCleaning" element={<DeepCleaning />}></Route>
        <Route path="/DeepCleaning" element={<DeepCleaning />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
