import React from "react";
import Card from "../../Components/Card/Card";
import { Loading } from "../../Components/Loading/Laoding";
import { fetchData } from "../../Services/FetchData";
import "./heroes.style.css";
import { useLocation } from "react-router-dom";
import { fetchDataFromSearch } from '../../Services/FetchDataFromSearch';

export default function Heroes() {
  const [heroes, setHeroes] = React.useState([]);
  const [totalHeroCount, setTotalHeroCount] = React.useState(0);
  const { state } = useLocation();
  const { st } = state ?? '';

  React.useEffect(() => {
    const getData = async () => {
      console.log("search term", st)
      const response = !!st ? await fetchDataFromSearch(st) : await fetchData("characters");
      console.log(response)
      setHeroes([...heroes, ...response.data.results]);
      setTotalHeroCount(response.data.total);
    };
    getData();
  }, [st]);


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
