import "./card.style.css";
import { Link } from "react-router-dom";

const parameter = "standard_xlarge.";

export default function Card({ hero }) {
  return (
    <Link className="card" to={`/hero/${hero.id}`}>
      <img
        src={hero.thumbnail.path + "/" + parameter + hero.thumbnail.extension}
        alt="thumbnail"
      />
    </Link>
  );
}
