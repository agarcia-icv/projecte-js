import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import type { Movie } from "../types/Movie";

export default function MovieDetail() {

  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [id]);

  if (!movie) {
    return <p>Carregant pelicules...</p>;
  }

  return (
    <div>
      <Link to="/">
        <button>Tornar</button>
      </Link>

      <h1>{movie.title}</h1>

      <p>Valoracio: {movie.rating}</p>

      <p>Data de sortida: {movie.releaseDate}</p>

      <p>Generes: {movie.genres.join(", ")}</p>

      <p>
        {movie.watched ? "Vista" : "No vista"}
      </p>

      <Link to={`/edit/${movie._id}`}>
        <button>Editar Pelicula</button>
      </Link>

    </div>
  );
}