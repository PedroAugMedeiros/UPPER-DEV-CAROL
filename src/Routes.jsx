// import React from "react";
// import { useRoutes } from "react-router-dom";
// import NotFound from "./pages/NotFound";
// import Home from "./pages/Home";
// import AboutUs from "./pages/Aboutus/index";
import DeepCleaning from "./pages/Deepcleaning/index";
// import CommercialCleaning from "./pages/CommercialCleaning/index";
// import JoinUs from "./pages/JoinUs/index";
// import MoveInAndMoveOut from "./pages/MoveInAndMoveOut/index";
// import TermsAndConditions from "./pages/TermsAndConditions/index";

// import RegularCleaning from "./pages/RegularCleaning/index";
// import AboutusPage from "./pages/Aboutus";

// const ProjectRoutes = () => {
//   let element = useRoutes([
//     { path: "/", element: <Home /> },
//     { path: "/x", element: <AboutusPage /> },
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

// export default ProjectRoutes;
import React from "react";
import { HashRouter, Route, Routes, Redirect } from "react-router-dom";
// import Auth from "../services/auth";
// import Error from "../pages/Error";
// import Pending from "../pages/Pending";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
import Home from "./pages/Home";
// import KidDashboard from "../pages/KidDashboard";
// import KidNew from "../pages/KidNew";
// import MeasuresEdit from "../pages/MeasuresEdit";
// import VaccineNew from "../pages/VaccineNew";
// import VaccineEdit from "../pages/VaccineEdit";

export default function Routesx() {
  return (
    //<BrowserRouter basename="/">
    <HashRouter basename="/">
      <Routes>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/" element={<Home />} />
        <Route path="/DeepCleaning">
          <DeepCleaning />
        </Route>
        {/* <Route exact path="/kid/detail/:id" component={KidDashboard} />
        <Route
          exact
          path="/kid/detail/:id/pediatrics"
          component={KidDashboard}
        />
        <Route
          exact
          path="/kid/detail/:id/measures"
          component={KidDashboard}
        />
        <Route
          exact
          path="/kid/detail/:id/vaccines"
          component={KidDashboard}
        />
        <Route exact path="/kid/new" component={KidNew} />
        <Route exact path="/measure/:id" component={MeasuresEdit} />
        <Route exact path="/vaccine/:id" component={VaccineEdit} />
        <Route exact path="/vaccine/new/:id" component={VaccineNew} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/pending" component={Pending} />
        <Route exact path="*" component={Error} /> */}
      </Routes>
    </HashRouter>
  );
}
