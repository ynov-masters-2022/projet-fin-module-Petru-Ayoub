import React from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../../Components/Loading/Laoding";
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
  return <>{hero.id ? <span>{hero.name}</span> : <Loading />}</>;
}
