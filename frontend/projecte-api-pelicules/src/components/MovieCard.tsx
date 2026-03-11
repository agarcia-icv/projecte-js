import type { Movie } from "../types/Movie";
import { Link } from "react-router-dom";
import Button from "./Button";

type Props = {
  movie: Movie & { _id: string };
};

export default function MovieCard({ movie }: Props) {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>

      <p>PUNTUACIÓ: {movie.rating}</p>

      <p>DATA D'ESTRENA: {movie.releaseDate}</p>

      <p>GENERE: {movie.genres.join(", ")}</p>

      <p>
        {movie.watched ? "VISTA" : "NO VISTA"}
      </p>

      <Link to={`/movie/${movie._id}`}>
        <Button text="Veure detalls" />
      </Link>
    </div>
  );
}