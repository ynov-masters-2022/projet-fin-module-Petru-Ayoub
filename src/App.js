import Home from "./Vues/Home/Home";
import NoPage from "./Vues/NoPage/NoPage";
import Comics from "./Vues/Comics/Comics";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Heroes from "./Vues/Heroes/Heroes";

function App() {
  return (
    <>
      <Router>
        <h1>Header</h1>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/heroes"} element={<Heroes />} />
          <Route path={"/comics"} element={<Comics />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
