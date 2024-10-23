import React from "react";
import Routes from "./Routes";
import { BrowserRouter, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes />
    </HashRouter>
  );
}

export default App;
