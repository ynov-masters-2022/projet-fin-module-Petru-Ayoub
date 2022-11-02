import "./card.style.css";
import { Link } from "react-router-dom";

const parameter = "standard_xlarge.";

export default function Card({ hero, comic }) {
  return (
    hero ? ( <Link className="card" to={`/hero/${hero.id}`}>
      <img
        src={hero.thumbnail.path + "/" + parameter + hero.thumbnail.extension}
        alt="thumbnail"
      />
    </Link> )
    :
    (<Link className="card" to={`/comic/${comic.id}`}>
      <img
        src={comic.thumbnail.path + "/" + parameter + comic.thumbnail.extension}
        alt="thumbnail"
      />
    </Link>)
  );
}
