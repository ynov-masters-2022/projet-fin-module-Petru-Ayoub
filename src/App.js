import Home from "./Vues/Home/Home";
import Movie from "./Vues/Movie/Movie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <h1>Header</h1>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/:id"} element={<Movie />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
