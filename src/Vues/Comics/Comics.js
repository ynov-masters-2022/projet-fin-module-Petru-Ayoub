import React from "react";
import { fetchData } from "../../Services/FetchData";
import Card from "../../Components/Card/Card";
import { Loading } from "../../Components/Loading/Laoding";

export default function Comics() {
  const [comics, setComics] = React.useState([]);
  const [totalComicsCount, setTotalComicsCount] = React.useState(0);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetchData("comics");
    setComics([...comics, ...response.data.results]);
    setTotalComicsCount(response.data.total);
    console.log(response);
  };
  return (
    <div className="content">
      <div className="wrapper">
        <span>
          Loaded: {comics.length !== 0 ? "1" : "0"} - {comics.length} out of{" "}
          {totalComicsCount}
        </span>
        <div className="listContainer fh">
          {comics.length !== 0 ? (
            comics.map((comic) => <Card key={comic.id} comic={comic} />)
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
}
