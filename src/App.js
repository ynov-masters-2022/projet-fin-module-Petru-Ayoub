import Home from "./Vues/Home/Home";
import Movie from "./Vues/Movie/Movie";
import NoPage from "./Vues/NoPage/NoPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <h1>Header</h1>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/movie"} element={<Movie />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
