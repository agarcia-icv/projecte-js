import { useEffect, useState } from "react";
import { getMovies } from "../services/movieService";
import MovieCard from "../components/MovieCard";
import type { Movie } from "../types/Movie";
import MovieForm from "../components/MovieForm";
import { Link } from "react-router-dom";


export default function MoviesPage() {

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies().then(setMovies);
  }, []);

  return (
<div>
  <h1>Pelicules</h1>

  
<Link to="/create">
  <button>Afegir pel·lícula</button>
</Link>

  {movies.map((movie, index) => (
    <MovieCard key={index} movie={movie} />
  ))}
</div>
    
  );
}