import React from "react";
import "./comicDetails.style.css"
import { Link, useParams } from "react-router-dom";
import { fetchData } from "../../Services/FetchData";

const parameter = "standard_xlarge.";

export default function ComicDetails() {
  //get url parameter -> hero id
  let { id } = useParams();
  const [comic, setComic] = React.useState([]);
  const [preview, setPreview] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [link, setLink] = React.useState("");
  
  
  React.useEffect(() => {
    getComic();
  }, []);

  const getComic = async () => {
    const response = await fetchData("comics", id);
    setComic(response.data.results[0]);
    if (response.data.results[0].textObjects.length){
      setPreview(response.data.results[0].textObjects[0].text);
      if (response.data.results[0].textObjects.length > 1){
        setDesc(response.data.results[0].textObjects[1].text);
      }
    }
    setLink(response.data.results[0].thumbnail.path + "/" + parameter  + response.data.results[0].thumbnail.extension);
  };
  let previews = preview.split('<br>');
  let descs = desc.split('<br>');
  //console.log(hero.thumbnail.path + "." + hero.thumbnail.extension);
  return <><img src={link}
        alt="thumbnail"
      /><h3>{comic.title}</h3>
       {preview !== "" ? (<div className="comics-container"><h5>Preview</h5><p>{previews.map(ele => <>{ele}<br></br></>)}</p></div>):<div></div> }
       {desc !== "" ? (<div className="comics-container"><h5>Description</h5><p> {descs.map(ele => <>{ele}<br></br></>)}</p></div>): <div></div>}
       
      </>;
}