import React from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../Services/FetchData";

export default function HeroDetails() {
  //get url parameter -> hero id
  let { id } = useParams();
  const [hero, setHero] = React.useState([]);

  React.useEffect(() => {
    getHero();
  }, []);

  const getHero = async () => {
    const response = await fetchData("characters", id);
    setHero(response.data.results[0]);
  };
  return <span>{hero.name}</span>;
}
