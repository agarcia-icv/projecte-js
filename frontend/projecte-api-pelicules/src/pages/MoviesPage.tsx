import { useEffect, useState } from "react";
import { getMovies } from "../services/movieService";
import MovieCard from "../components/MovieCard";
import type { Movie } from "../types/Movie";

export default function MoviesPage() {

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies().then(setMovies);
  }, []);

  return (
    <div>
      <h1>PELICULES</h1>

      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}

    </div>
  );
}