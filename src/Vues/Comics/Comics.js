import React from "react";
import { fetchData } from "../../Services/FetchData";

export default function Comics() {
  const [comics, setComics] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetchData("comics");
    setComics([...comics, ...response.data.results]);
    console.log(response);
  };
  return (
    <>
      <div className="body">
        {comics.length !== 0 ? (
          comics.map((comic) => <li key={comic.id}> {comic.title}</li>)
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </>
  );
}
