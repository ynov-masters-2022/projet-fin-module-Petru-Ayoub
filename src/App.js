import Home from "./Vues/Home/Home";
import NoPage from "./Vues/NoPage/NoPage";
import Comics from "./Vues/Comics/Comics";
import Heroes from "./Vues/Heroes/Heroes";
import NavBar from "./Components/NavBar/NavBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import HeroDetails from "./Vues/HeroDetails/HeroDetails";
import ComicDetails from "./Vues/ComicDetails/ComicDetails";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/heroes"} element={<Heroes />} />
        <Route path={"/comics"} element={<Comics />} />
        <Route path={"/comic/:id"} element={<ComicDetails />} />
        <Route path={"/hero/:id"} element={<HeroDetails />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
