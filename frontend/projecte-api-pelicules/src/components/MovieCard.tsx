import type { Movie } from "../types/Movie";
import { Link } from "react-router-dom";

type Props = {
  movie: Movie & { _id: string };
};

export default function MovieCard({ movie }: Props) {
  return (
    <div className="card shadow-sm h-100">

      <div className="card-body">

        <h5 className="card-title">{movie.title}</h5>

        <p className="card-text">
          Puntuació: {movie.rating}
        </p>

      <p className="card-text">
 {new Date(movie.releaseDate).toLocaleDateString()}
</p>

        <p className="card-text">
          {movie.genres.join(", ")}
        </p>

        <p className="card-text">
          {movie.watched ? "Vista" : "No vista"}
        </p>

        <Link to={`/movie/${movie._id}`} className="btn btn-primary btn-sm me-2">
          Veure
        </Link>

        <Link to={`/edit/${movie._id}`} className="btn btn-warning btn-sm">
          Editar
        </Link>

      </div>

    </div>
  );
}