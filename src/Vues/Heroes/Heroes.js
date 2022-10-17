import React from "react";
import Card from "../../Components/Card/Card";
import { Loading } from "../../Components/Loading/Laoding";
import { fetchData } from "../../Services/FetchData";
import "./heroes.style.css";

export default function Heroes() {
  const [heroes, setHeroes] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetchData("characters");
    setHeroes([...heroes, ...response.data.results]);
  };
  return (
    <div className="content">
      <div className="wrapper">
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
