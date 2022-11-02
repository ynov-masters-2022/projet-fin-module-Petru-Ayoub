import React from "react";
import "./comicDetails.style.css"
import { Link, useParams } from "react-router-dom";
import { fetchData } from "../../Services/FetchData";

const parameter = "standard_xlarge.";

export default function ComicDetails() {
  //get url parameter -> hero id
  let { id } = useParams();
  const [comic, setComic] = React.useState([]);
  const [link, setLink] = React.useState("");
  
  
  React.useEffect(() => {
    getComic();
  }, []);

  const getComic = async () => {
    const response = await fetchData("comics", id);
    setComic(response.data.results[0]);
    setLink(response.data.results[0].thumbnail.path + "/" + parameter  + response.data.results[0].thumbnail.extension);
  };
  //console.log(hero.thumbnail.path + "." + hero.thumbnail.extension);
  return <><img src={link}
        alt="thumbnail"
      /><h3>{comic.title}</h3><div className="comics-container">
       
      </div></>;
}