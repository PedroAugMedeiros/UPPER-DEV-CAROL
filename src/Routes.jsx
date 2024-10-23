import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import Home from "pages/Home";
import AboutUs from "pages/Aboutus/index";
import DeepCleaning from "pages/Deepcleaning/index";
import CommercialCleaning from "pages/CommercialCleaning/index";
import JoinUs from "pages/JoinUs/index";
import MoveInAndMoveOut from "pages/MoveInAndMoveOut/index";
import TermsAndConditions from "pages/TermsAndConditions/index";

import RegularCleaning from "./pages/RegularCleaning/index";
import AboutusPage from "./pages/Aboutus/index";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/AboutUs", element: <AboutusPage /> },
    { path: "/DeepCleaning", element: <DeepCleaning /> },
    { path: "/CommercialCleaning", element: <CommercialCleaning /> },
    { path: "/JoinUs", element: <JoinUs /> },
    { path: "/MoveInAndMoveOut", element: <MoveInAndMoveOut /> },
    { path: "/RegularCleaning", element: <RegularCleaning /> },
    { path: "/TermsAndConditions", element: <TermsAndConditions /> },
    { path: "*", element: <NotFound /> },
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "AboutUs",
      element: <Home />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
