import React from "react";
import { fetchData } from "../../Services/FetchData";

export default function Heroes() {
  const [heroes, setHeroes] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetchData("characters");
    setHeroes([...heroes, ...response.data.results]);
  };
  return (
    <>
      <div className="body">
        {heroes.length !== 0 ? (
          heroes.map((hero) => <li key={hero.id}> {hero.name}</li>)
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </>
  );
}
