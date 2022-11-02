import React from "react";
import "./heroDetails.style.css"
import { Link, useParams } from "react-router-dom";
import { fetchData } from "../../Services/FetchData";

const parameter = "standard_xlarge.";

export default function HeroDetails() {
  //get url parameter -> hero id
  let { id } = useParams();
  const [hero, setHero] = React.useState([]);
  const [comics, setComics] = React.useState([]);
  const [lien, setLien] = React.useState("");
  
  React.useEffect(() => {
    getHero();
  }, []);

  const getHero = async () => {
    const response = await fetchData("characters", id);
    setHero(response.data.results[0]);
    setLien(response.data.results[0].thumbnail.path + "/" + parameter + response.data.results[0].thumbnail.extension);
    setComics(response.data.results[0].comics.items);
  };
  //console.log(hero.thumbnail.path + "." + hero.thumbnail.extension);
  return <><img src={lien}
        alt="thumbnail"
      /><h3>{hero.name}</h3><div className="comics-container">
       <ul> { comics.map((comic) => <li key={comic.resourceURI}><Link to={`/comic/${comic.resourceURI.substring(comic.resourceURI.lastIndexOf('/') + 1)}`}><p>{comic.name}</p></Link> </li>)
       }</ul>
      </div></>;
}