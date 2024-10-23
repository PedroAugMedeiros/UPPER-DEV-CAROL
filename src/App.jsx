import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DeepCleaning from "./pages/Deepcleaning";

function App() {
  return (
    <div className="App w-full h-full bg-repeat items-stretch">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/Home" element={<Home />}></Route>
        </Route>
        <Route path="/DeepCleaning" element={<DeepCleaning />}></Route>
      </Routes>
    </div>
  );
}

export default App;
