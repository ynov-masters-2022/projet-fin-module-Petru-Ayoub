import React from "react";
import Card from "../../Components/Card/Card";
import { Loading } from "../../Components/Loading/Laoding";
import { fetchData } from "../../Services/FetchData";
import "./heroes.style.css";

import { fetchDataFromSearch } from '../../Services/FetchDataFromSearch';
import { useSearchParams } from "react-router-dom";

export default function Heroes() {
  const [heroes, setHeroes] = React.useState([]);
  const [totalHeroCount, setTotalHeroCount] = React.useState(0);
  const [searchParams] = useSearchParams();
  const st = searchParams.get("search");

  //TODO: redo getData but better
  React.useEffect(() => {
    const getData = async () => {
      const response = !!st ? await fetchDataFromSearch(st) : await fetchData("characters");
      setHeroes(response.data.results);
      setTotalHeroCount(response.data.total);
    };
    getData();
  }, [st]);

  const onLoadNextHeroes = async () => {
    const response = await fetchData("characters", undefined, heroes.length ?? 0);
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
        <span>
          Loaded: {heroes.length !== 0 ? "1" : "0"} - {heroes.length} out of{" "}
          {totalHeroCount}
        </span>
        <div className="center">
          <button className="loadMoreButton" onClick={onLoadNextHeroes}>
            Load more...
          </button>
        </div>
      </div>

    </div>
  );
}
