import React from "react";
import { Link } from "react-router-dom";
import "./home.style.css"

export default function Home() {
  return (
    <>
    <div className="optionWrapper">
      <Link  style={{ textDecoration: 'none' }} className="option" to={'/heroes'}>
            <div> <span>HEROES</span> </div>
      </Link>
      <Link style={{ textDecoration: 'none' }} className="option" to={'/comics'}>
            <div> <span>COMICS</span> </div>
      </Link>


    </div>
    </>
  );
}
