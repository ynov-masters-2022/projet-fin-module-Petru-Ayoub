import React from "react";
import { Link } from "react-router-dom";
import Card from "../../Components/Card/Card";
import { Loading } from "../../Components/Loading/Laoding";
import { fetchData } from "../../Services/FetchData";
import "./heroes.style.css";

export default function Heroes() {
  const [heroes, setHeroes] = React.useState([]);
  const [totalHeroCount, setTotalHeroCount] = React.useState(0);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetchData("characters");
    setHeroes([...heroes, ...response.data.results]);
    setTotalHeroCount(response.data.total);
  };
  return (
    <div className="content">
      <div className="wrapper">
        <span>
          Loaded: {heroes.length !== 0 ? "1" : "0"} - {heroes.length} out of{" "}
          {totalHeroCount}
        </span>
        <div className="listContainer fh">
          {heroes.length !== 0 ? (
            heroes.map((hero) => <Card key={hero.id} hero={hero} />)
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
}
