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
  const [series, setSeries] = React.useState([]);
  const [stories, setStories] = React.useState([]);
  const [image, setImage] = React.useState("");

  React.useEffect(() => {
    getHero();
  }, []);

  const getHero = async () => {
    const response = await fetchData("characters", id);
    setHero(response.data.results[0]);
    setImage(response.data.results[0].thumbnail.path + "/" + parameter + response.data.results[0].thumbnail.extension);
    setComics(response.data.results[0].comics.items);
    setSeries(response.data.results[0].series.items);
    setStories(response.data.results[0].stories.items);

    console.log(!!series.length)
  };

  return (
    <div className="detailsWrapper">
      <img className="portrait" src={image} alt="thumbnail" />
      <h1 className="heroName">{hero.name}</h1>
      <p className="heroDescription">
        {hero.description || "This Hero Has No Description"}
      </p>
      <div className="comicList">
        <h3>Comics thats {hero.name} appears in: </h3>
        {!!comics.length ? comics.map((comic) => <Link key={comic.resourceURI} to={`/comic/${comic.resourceURI.substring(comic.resourceURI.lastIndexOf('/') + 1)}`}>{comic.name} <br /> </Link>) : "No comics :("}
      </div>
      <div className="storiesList">
        <h3>Stories thats {hero.name} appears in: </h3>
        {!!stories.length ? stories.map((story) => <p key={story.resourceURI}>{story.name}</p>) : "No stories :("}
      </div>
      <div className="seriesList">
        <h3>Series thats {hero.name} appears in: </h3>
        {!!series.length ? series.map((series) => <p key={series.resourceURI}>{series.name}</p>) : "No series :("}
      </div>
    </div>
  );
}