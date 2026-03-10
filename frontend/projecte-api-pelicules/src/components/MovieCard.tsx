import type { Movie } from "../types/Movie";

type Props = {
  movie: Movie;
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
      <h3>{movie.title}</h3>

       <p>{movie.rating}</p>

    <button>View Details</button>
    </div>
    
  );
}