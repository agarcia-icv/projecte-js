import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import type { Movie } from "../types/Movie";

export default function MoviesPage() {

  const [movies, setMovies] = useState<(Movie & { _id: string })[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div>

      <h1 className="mb-4">Llista de pelicules</h1>

      <Link to="/create" className="btn btn-success mb-4">
        Afegir pelicula
      </Link>

      <div className="row">
        {movies.map(movie => (
          <div className="col-md-4 mb-3" key={movie._id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>

    </div>
  );
}