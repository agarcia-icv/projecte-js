import { useEffect, useState } from "react";
import { getMovies } from "../services/movieService";
import MovieCard from "../components/MovieCard";
import type { Movie } from "../types/Movie";
import MovieForm from "../components/MovieForm";

export default function MoviesPage() {

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies().then(setMovies);
  }, []);

  return (
<div>
  <h1>Pelicules</h1>

  <MovieForm />

  {movies.map((movie, index) => (
    <MovieCard key={index} movie={movie} />
  ))}
</div>
    
  );
}