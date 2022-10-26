import React from "react";
import "./heroDetails.style.css"
import { useParams } from "react-router-dom";
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
  });

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
       <ul> { comics.map((comic) => <li key={comic.resourceURI}><a href={comic.resourceURI}>{comic.name}</a> </li>)
       }</ul>
      </div></>;
}