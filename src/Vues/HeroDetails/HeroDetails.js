import React from "react";
import "./heroDetails.style.css"
import { Link, useParams } from "react-router-dom";
import { fetchData } from "../../Services/FetchData";

const parameter = "portrait_incredible.";

export default function HeroDetails() {
  //get url parameter -> hero id
  let { id } = useParams();
  const [hero, setHero] = React.useState([]);
  const [comics, setComics] = React.useState([]);
  const [image, setImage] = React.useState("");

  React.useEffect(() => {
    getHero();
  }, []);

  const getHero = async () => {
    const response = await fetchData("characters", id);
    setHero(response.data.results[0]);
    setImage(response.data.results[0].thumbnail.path + "/" + parameter + response.data.results[0].thumbnail.extension);
    setComics(response.data.results[0].comics.items);
  };

  return (
    <div className="detailsWrapper">
      <img className="portrait" src={image} alt="thumbnail" />
      <h3 className="heroName">{hero.name}</h3>
      <p>
        {hero.description || "This Hero Has No Description"}
      </p>
      <div className="comicList">
        <span>Comics thats {hero.name} appears in: </span>
        {comics.map((comic) => <li key={comic.resourceURI}><Link to={`/comic/${comic.resourceURI.substring(comic.resourceURI.lastIndexOf('/') + 1)}`}><p>{comic.name}</p></Link> </li>)}
      </div>
    </div>

  );
}